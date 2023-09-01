interface getAuthKeyInterface {
  Key: string;
  Secret: string;
}
const key: string = "Key";
const secret: string = "Secret";
const mainPage: string = "/";

const getAuthKey = (): getAuthKeyInterface => {
  const Key: string = window.localStorage.getItem(key)!;
  const Secret: string = window.localStorage.getItem(secret)!;
  return { Key, Secret };
};

export { getAuthKey, key, mainPage, secret };
