import { useNavigate } from "react-router-dom";
import { resetLocalStorage } from "../utils/resetLocalStorage";

export default function UseLogout() {
  const navigate = useNavigate();
  function logout() {
    resetLocalStorage();
    navigate("/register");
  }
  return { logout };
}
