import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import EditBook from ".";
import UseModal from "../../../shared-components/Modal";

export default function HandleEdit({ id, status }) {
  const { t } = useTranslation();
  const { modal, open, close } = UseModal();

  return (
    <div>
      <Button onClick={open} variant="contained" size="small">
        {t("Edit")}
      </Button>
      {modal(<EditBook status={status} id={id} close={close} />)}
    </div>
  );
}
