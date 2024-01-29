import { FetchOptions } from "ofetch"

import type { SupportedMediaType } from "~/constants/media"
import type { MediaProvider } from "~/types/media-provider"

import FetchFactory from "./factory"

class MediaProviderApi extends FetchFactory<MediaProvider[]> {
  private RESOURCE = "stats/"

  async getStats(media: SupportedMediaType): Promise<MediaProvider[]> {
    const fetchOptions: FetchOptions<"json"> = {
      headers: { "User-Agent": this.userAgent },
    }

    const media_path = media === "image" ? "images" : media
    const url = `v1/${media_path}/${this.RESOURCE}`

    return this.call(
      "GET",
      url,
      undefined, // body
      fetchOptions
    )
  }
}

export default MediaProviderApi
