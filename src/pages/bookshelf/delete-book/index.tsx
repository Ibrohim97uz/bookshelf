import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { UseDeleteBook } from "../../../hooks/requests";

export default function DeleteBook({ close, id }) {
  const { t } = useTranslation();
  const deleteBook = UseDeleteBook(id);

  function onSubmit() {
    deleteBook.mutateAsync(null).then(() => {
      window.location.reload();
      close();
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <DialogTitle>{t("Edit book")}</DialogTitle>
      <DialogContent>
        <Typography>{t("Are you sure to delete this book?")}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            close();
          }}
        >
          {t("Close")}
        </Button>
        <Button color="error" variant="contained" type="submit">
          {t("Yes")}
        </Button>
      </DialogActions>
    </form>
  );
}
