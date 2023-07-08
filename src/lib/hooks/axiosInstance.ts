import axios, { AxiosResponse } from "axios";

export const InternalServerError = {
  message: "Internal error occured during the request.",
  code: -500,
};

export const onFulfilledRequest = (response: AxiosResponse) => response;

export const onRejectedRequest = (_error: any) =>
  Promise.reject(InternalServerError);

export const publicApiRequest = (url?: string) => {
  return axios.create({
    baseURL: url !== undefined ? url : "http://localhost:8000/api",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

publicApiRequest().interceptors.response.use(
  onFulfilledRequest,
  onRejectedRequest
);
