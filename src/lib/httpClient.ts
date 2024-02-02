import axios, { AxiosError, AxiosResponse } from "axios";
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
// https://stackoverflow.com/questions/48990632/how-to-manage-axios-errors-globally-or-from-one-point
httpClient.interceptors.response.use(
  (response) => response,
  (err: AxiosError) => {
    // const req = err.request as ;
    if (err.response as AxiosResponse<any, any>) {
      // The client was given an error response (5xx, 4xx)
      console.error("resp", err);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.error("req", err);
    } else {
      // Anything else
      console.error("error", err);
    }
    return Promise.reject(err);
  }
);
