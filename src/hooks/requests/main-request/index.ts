import axios from "axios";
import { getAuthKey } from "../../../utils/getAuthKey";
import { resetLocalStorage } from "../../../utils/resetLocalStorage";

const MainRequest = (Sign: string) => {
  const { Key } = getAuthKey();
  const mainRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Key,
      Sign,
    },
  });

  mainRequest.interceptors.response.use(
    (config) => config,
    (error) => {
      if (error.response?.status === 401) {
        resetLocalStorage();
        window.location.reload();
      }
      throw error;
    }
  );
  return mainRequest;
};

export default MainRequest;
