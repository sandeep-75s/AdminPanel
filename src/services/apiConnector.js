import axios from "axios";

export const axiosInstance = axios.create({});

export const  apiConnector = async(method, url, bodyData=null, headers, params) => {
  return await axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data:bodyData,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};