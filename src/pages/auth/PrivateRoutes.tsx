import { Outlet } from "react-router-dom";
import { getAuthKey } from "../../utils/getAuthKey";
import Register from "./register";

const PrivateRoutes = () => {
  const { Key } = getAuthKey();

  return Key ? <Outlet /> : <Register />;
};

export default PrivateRoutes;
