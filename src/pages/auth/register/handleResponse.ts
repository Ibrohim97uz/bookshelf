import i18next from "i18next";
import { key, secret } from "../../../utils/getAuthKey";

interface Response {
  data: {
    email: string;
    id: number;
    key: string;
    name: string;
    secret: string;
  };
  isOk: boolean;
  message: string;
}

const handleResponse = (response: Response): Promise<void> => {
  const responseKey = response?.data?.key;
  const responseSecret = response?.data?.secret;

  return new Promise((resolve, reject) => {
    if (!key) {
      reject(i18next.t("Something is wrong..."));
    }

    localStorage.setItem(key, responseKey);
    localStorage.setItem(secret, responseSecret);
    return resolve();
  });
};

export { handleResponse };
