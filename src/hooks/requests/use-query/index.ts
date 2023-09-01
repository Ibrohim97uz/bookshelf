import { MD5 } from "crypto-js";
import { useQuery } from "react-query";
import { getAuthKey } from "../../../utils/getAuthKey";
import MainRequest from "../main-request";

const route = process.env.REACT_APP_SERVER_URL;

const useGeneralApi = (url: string, params?: any, options?: any) => {
  const signstr = `GET${url}${getAuthKey().Secret}`;
  const sign = MD5(signstr).toString();

  return useQuery(
    [url, params],
    async () => MainRequest(sign).get(route + url, { params }),
    {
      ...options,
    }
  );
};

export default useGeneralApi;
