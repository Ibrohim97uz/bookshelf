import { MD5 } from "crypto-js";
import { useMutation } from "react-query";
import { getAuthKey } from "../../../utils/getAuthKey";
import MainRequest from "../main-request";

type method = "post" | "get" | "put" | "patch" | "delete";
const route = process.env.REACT_APP_SERVER_URL;

const useGeneralApiMutation = (method: method, url: string, options?: any) => {
  return useMutation(
    (data?: any) => {
      const signstr = `${method.toUpperCase()}${url}${
        data ? JSON.stringify(data) : ""
      }${getAuthKey().Secret}`;

      const sign = MD5(signstr).toString();
      const request = MainRequest(sign)({
        method,
        url: route + url,
        data,
      });
      return request;
    },
    { ...options }
  );
};
export default useGeneralApiMutation;
