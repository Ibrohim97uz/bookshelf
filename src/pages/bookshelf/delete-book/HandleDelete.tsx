import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import DeleteBook from ".";
import UseModal from "../../../shared-components/Modal";

export default function HandleDelete({ id }) {
  const { t } = useTranslation();
  const { modal, open, close } = UseModal();

  return (
    <div>
      <Button onClick={open} variant="contained" color="error" size="small">
        {t("Delete")}
      </Button>
      {modal(<DeleteBook id={id} close={close} />)}
    </div>
  );
}
