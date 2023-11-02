//? this code sets up an API client for fetching article summaries using the RapidAPI service. It defines the necessary configuration, including the API key, base URL, and headers. It also provides an endpoint for getting article summaries and exports a query hook to interact with the API

//! IMPORT REDUX TOOLS
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//! GET RAPID API KEY
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

//? Create an API for fetching article summaries using RapidAPI
export const articleApi = createApi({
    
  // The path for the API reducer
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      // Set necessary headers for RapidAPI including the API key and host
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define an API endpoint for getting article summaries
    getSummary: builder.query({
      // Encode the article URL parameter and specify the summary length
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
