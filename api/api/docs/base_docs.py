from http.client import responses as http_responses
from textwrap import dedent

from django.conf import settings
from rest_framework.exceptions import (
    APIException,
    NotFound,
    ValidationError,
)

from drf_spectacular.extensions import OpenApiSerializerExtension
from drf_spectacular.openapi import AutoSchema
from drf_spectacular.utils import (
    OpenApiExample,
    OpenApiParameter,
    OpenApiResponse,
    extend_schema,
)

from api.constants.media_types import MediaType
from api.constants.parameters import COLLECTION, TAG


def fields_to_md(field_names):
    """
    Create a Markdown representation of the given list of names to use in Swagger docs.

    :param field_names: the list of field names to convert to Markdown
    :return: the names as a Markdown string
    """

    *all_but_last, last = field_names
    all_but_last = ", ".join([f"`{name}`" for name in all_but_last])
    return f"{all_but_last} and `{last}`"


class APIExceptionOpenApiSerializerExtension(OpenApiSerializerExtension):
    target_class = APIException
    match_subclasses = True

    @classmethod
    def _get_detail(cls, target):
        return getattr(target, "detail", target.default_detail)

    def get_name(self, *args):
        cls = self.target if isinstance(self.target, type) else self.target.__class__
        return cls.__name__

    def map_serializer(self, *args):
        cls = self.target if isinstance(self.target, type) else self.target.__class__

        detail_string = {
            "type": "string",
            "description": "A description of what went wrong.",
        }

        if cls == ValidationError or issubclass(cls, ValidationError):
            return {
                "title": "ValidationError",
                "type": "object",
                "properties": {
                    "detail": {
                        "oneOf": [
                            detail_string,
                            {
                                "type": "object",
                                "additionalProperties": True,
                            },
                        ]
                    }
                },
            }

        return {
            "title": cls.__name__,
            "type": "object",
            "properties": {"detail": detail_string},
        }

    @classmethod
    def exception_example(cls, exception):
        if exception == ValidationError:
            return {"detail": {"<request parameter>": "<error details>"}}

        return {"detail": cls._get_detail(exception)}


def get_examples(code, serializer, example):
    if (
        not example
        and isinstance(serializer, type)
        and issubclass(serializer, APIException)
    ):
        example = APIExceptionOpenApiSerializerExtension.exception_example(serializer)
    elif example:
        example = example["application/json"]
    else:
        return []

    return [
        OpenApiExample(
            http_responses[code],
            value=example,
        )
    ]


def custom_extend_schema(**kwargs):
    extend_args = {}

    description = kwargs.pop("desc", None)
    if description:
        description = dedent(description)
        extend_args["description"] = f"{description}"

    parameters = kwargs.pop("params", [])
    if not isinstance(parameters, list):
        parameters = [parameters]
    if parameters:
        extend_args["parameters"] = parameters

    responses = kwargs.pop("res", {})
    if responses:
        responses = {
            code: OpenApiResponse(
                serializer,
                description=http_responses[code],
                examples=get_examples(code, serializer, example),
            )
            for code, (serializer, example) in responses.items()
        }
        extend_args["responses"] = responses

    eg = kwargs.pop("eg", [])
    if eg:
        # Docs: https://redocly.com/docs/api-reference-docs/specification-extensions/x-code-samples/
        extend_args["extensions"] = {
            "x-codeSamples": [{"lang": "cURL", "source": example} for example in eg]
        }

    return extend_schema(**extend_args, **kwargs)


class MediaSchema(AutoSchema):
    """
    Overrides the default schema generator provided by drf-spectacular to adapt
    to the conventions of the Openverse API documentation.
    """

    def get_description(self) -> str:
        return f"""{super().get_description()}"""

    def get_operation_id(self) -> str:
        operation_tokens = super().get_operation_id().split("_")[0:-1]
        if self.method == "GET" and len(operation_tokens) == 1:
            if self._is_list_view():
                operation_tokens.append("search")
            else:
                operation_tokens.append("detail")
        return "_".join(operation_tokens)


source_404_message = "Invalid source 'name'. Valid sources are ..."
source_404_response = OpenApiResponse(
    NotFound,
    examples=[
        OpenApiExample(
            name="404",
            value={"detail": source_404_message},
        )
    ],
)


def build_source_path_parameter(media_type: MediaType):
    valid_description = (
        f"Valid values are source_names from the stats endpoint: "
        f"{settings.CANONICAL_ORIGIN}/v1/{media_type}/stats/."
    )

    return OpenApiParameter(
        name="source",
        type={
            "type": "string",
            "pattern": "^[^/.]+?$",
        },
        location=OpenApiParameter.PATH,
        description=f"The source of {media_type}. {valid_description}",
    )


creator_path_parameter = OpenApiParameter(
    name="creator",
    type={
        "type": "string",
        "pattern": "^.+$",
    },
    location=OpenApiParameter.PATH,
    description="The name of the media creator. This parameter "
    "is case-sensitive, and matches exactly.",
)
tag_path_parameter = OpenApiParameter(
    name="tag",
    type={
        "type": "string",
        "pattern": "^[^/.]+?$",
    },
    location=OpenApiParameter.PATH,
    description="The tag of the media. Not case-sensitive, matches exactly.",
)

SEARCH_DESCRIPTION_DEFAULT = """
Return {media_type} that match the query.

This endpoint allows you to search within specific fields, or to retrieve
a collection of all {media_type} from a specific source, creator or tag.
Results are paginated on the basis of the `page` parameter. The `page_size`
parameter controls the total number of pages.

Although there may be millions of relevant records, only the most relevant
or the most recent several thousand records can be viewed. This is by design:
the search endpoint should be used to find the top 10,000 most relevant
results, not for exhaustive search or bulk download of every barely relevant
result. As such, the caller should not try to access pages beyond `page_count`,
or else the server will reject the query.

### Default search
The **default search** allows users to find media based on a query string.
It supports a wide range of optional filters to narrow down search results
according to specific needs.

By default, this endpoint performs a full-text search for the value of `q` parameter.
You can search within the `creator`, `title` or `tags` fields by omitting
the `q` parameter and using one of these field parameters.
These results can be filtered by {filter_fields}.

The default search results are sorted by relevance.

### Collection search
The collection search allows to retrieve a collection of media from a specific source,
creator or tag. The `{collection_param}` parameter is used to specify the type of collection to retrieve.

- `{collection_param}=tag&{tag_param}=tagName` will return the media with tag `tagName`.
- `{collection_param}=source&source=sourceName` will return the media from source `sourceName`.
- `{collection_param}=creator&creator=creatorName&source=sourceName` will return the media by creator `creatorName` at `sourceName`.

Collection results are sorted by the time they were added to Openverse, with the most recent
additions appearing first. The filters such as `license` are not available for collections.
"""

SEARCH_DESCRIPTION_COLLECTIONS_DISABLED = """
Search {media_type} using a query string.

By using this endpoint, you can obtain search results based on specified
query and optionally filter results by
{filter_fields}.

Results are ranked in order of relevance and paginated on the basis of the
`page` param. The `page_size` param controls the total number of pages.

Although there may be millions of relevant records, only the most relevant
several thousand records can be viewed. This is by design: the search
endpoint should be used to find the top 10,000 most relevant results, not
for exhaustive search or bulk download of every barely relevant result. As
such, the caller should not try to access pages beyond `page_count`, or else
the server will reject the query."""

SEARCH_DESCRIPTION = (
    SEARCH_DESCRIPTION_DEFAULT
    if settings.SHOW_COLLECTION_DOCS
    else SEARCH_DESCRIPTION_COLLECTIONS_DISABLED
)

NON_FILTER_FIELDS = [
    "q",
    TAG,
    COLLECTION,
    "page",
    "page_size",
    "unstable__sort_by",
    "unstable__sort_dir",
    "unstable__authority",
    "unstable__authority_boost",
]
