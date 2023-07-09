import axios, { AxiosResponse } from "axios";
import { LocalStorage } from "../../storage/LocalStorage";
import { CONSTANTS } from "../../constants/constants";

export const InternalServerError = {
  message: "Internal error occured during the request.",
  code: -500,
};

export const onFulfilledRequest = (response: AxiosResponse) => response;

export const onRejectedRequest = (_error: any) =>
  Promise.reject(InternalServerError);

export const publicApiRequest = (url?: string, contentType?: string) => {
  return axios.create({
    baseURL:
      url !== undefined && url.length > 0 ? url : "http://localhost:8000/api",
    headers: {
      accept: "application/json",
      "Content-Type":
        contentType !== undefined ? contentType : "application/json",
      Authorization: `Bearer ${localStorage.getItem(
        CONSTANTS.STORAGE_KEY.ACCESS_TOKEN
      )}`,
    },
  });
};

publicApiRequest().interceptors.response.use(
  onFulfilledRequest,
  onRejectedRequest
);
