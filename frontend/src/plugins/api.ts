import { $fetch, FetchOptions } from "ofetch"

import MediaProviderApi from "~/api/media-provider"

import type { Plugin } from "@nuxt/types"

const apiPlugin: Plugin = (context, inject) => {
  const fetchOptions: FetchOptions = {
    baseURL: context.$config.apiBaseUrl,
  }

  const apiFecther = $fetch.create(fetchOptions)

  const api = {
    mediaProviders: new MediaProviderApi(apiFecther),
  }

  inject("api", api)
}

export default apiPlugin
