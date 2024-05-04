import axios from "axios";
import Constants from "./constants";

class Api {
  static baseHeaders = {
    "Content-Type": "application/json",
  };

  static baseUrl = "";

  static request = async (
    method,
    route,
    headers = {},
    params = {},
    data = null,
    timeout = 0,
    responseType = null
  ) => {
    const url = `${Api.baseUrl}${route}`;

    const requestConfig = {
      method,
      url,
      headers: { ...Api.baseHeaders, ...headers },
      params,
      data,
      timeout,
      responseType,
    };

    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.status === 403 &&
        error.response.config.url.includes(Constants.exportProductionBaseURL())
      ) {
        window.location.pathname = "/logout";
      }
      throw error;
    }
  };

  static get = (
    route,
    headers = {},
    params = {},
    timeout = 0,
    responseType = null
  ) => {
    return Api.request("get", route, headers, params, null, timeout, responseType);
  };

  static put = (
    route,
    headers = {},
    params = {},
    data = null,
    timeout = 0,
    responseType = null
  ) => {
    return Api.request("put", route, headers, params, data, timeout, responseType);
  };

  static post = (
    route,
    headers = {},
    params = {},
    data = null,
    timeout = 0,
    responseType = null
  ) => {
    return Api.request("post", route, headers, params, data, timeout, responseType);
  };

  static patch = (
    route,
    headers = {},
    params = {},
    data = null,
    timeout = 0,
    responseType = null
  ) => {
    return Api.request("patch", route, headers, params, data, timeout, responseType);
  };

  static delete = (
    route,
    headers = {},
    params = {},
    data = null,
    timeout = 0,
    responseType = null
  ) => {
    return Api.request("delete", route, headers, params, data, timeout, responseType);
  };
}

export default Api;