```py
# Extract unique labels

import boto3
import pandas as pd
from io import StringIO
from collections import defaultdict
import json
from tqdm.auto import tqdm

# Configure the S3 client
session = boto3.Session(profile_name='default')
s3 = session.client('s3')

# Bucket and file name
bucket_name = "migrated-cccatalog-archives"
key = "kafka/image_analysis_labels-2020-12-17.txt"

# Contents of the image_analysis file look like this:
# {"Labels":[{"Name":"Grass","Confidence":9926638793945312e-14,"Instances":[],"Parents":[{"Name":"Plant"}]},{"Name":"Plant","Confidence":9926638793945312e-14,"Instances":[],"Parents":[]},{"Name":"Person","Confidence":9708859252929688e-14,"Instances":[{"BoundingBox":{"Width":14363860711455345e-18,"Height":6947843730449677e-17,"Left":2688732445240021e-16,"Top":35911652445

# Initialize the defaultdict to count labels
label_count = defaultdict(int)

# Get the size of the file
file_size = s3.head_object(Bucket=bucket_name, Key=key)['ContentLength']

# Initialize the progress bar
with tqdm(total=file_size, desc="Processing", unit="B", unit_scale=True) as pbar:
    # Read the file line by line
    counter = 0
    s3_object = s3.get_object(Bucket=bucket_name, Key=key)
    for line in s3_object['Body'].iter_lines():
        pbar.update(len(line) + 1)  # Add 1 for the newline character
        json_line = json.loads(line)

        labels = json_line['response']['Labels']
        for label in labels:
            label_name = label['Name']
            label_count[label_name] += 1

        counter += 1
        if counter % 1000 == 0:
            # Write the current label_count to the label_count.csv file every 1000 lines
            label_df = pd.DataFrame(list(label_count.items()), columns=['Label', 'Count'])
            label_df.to_csv('label_count.csv', index=False)
            counter = 0

# Write the remaining label_count to the label_count.csv file after processing all lines
if counter > 0:
    label_df = pd.DataFrame(list(label_count.items()), columns=['Label', 'Count'])
    label_df.to_csv('label_count.csv', index=False)

```
