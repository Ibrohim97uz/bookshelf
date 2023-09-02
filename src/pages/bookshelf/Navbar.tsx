import { Avatar, Button } from "@mui/material";
import styles from "./style.module.css";
import book from "../../images/book.png";
import { useTranslation } from "react-i18next";
import UseLogout from "../../hooks/UseLogout";
import UseModal from "../../shared-components/Modal";
import CreateBook from "./create-book/CreateBook";
import Language from "../../shared-components/language";

export default function Navbar() {
  const { t } = useTranslation();
  const { logout } = UseLogout();
  const { modal, open, close } = UseModal();

  return (
    <>
      <div className={styles.navbar}>
        <Avatar sx={{ height: 100, width: 100 }} src={book} />
        <div className={styles.language}>
          <Language />
        </div>
        <div className={styles.buttons}>
          <Button onClick={open} variant="contained">
            {t("Create new book")}
          </Button>
          <Button onClick={logout} variant="contained" color="error">
            {t("Logout")}
          </Button>

          {modal(<CreateBook close={close} />)}
        </div>
      </div>
      <hr />
      <br />
    </>
  );
}
