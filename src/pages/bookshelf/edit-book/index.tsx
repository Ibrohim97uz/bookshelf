import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import schema from "./schema";
import Input from "../../../shared-components/Input";
import { UseEditBook } from "../../../hooks/requests";

type formData = {
  status: number;
} & void;

export default function EditBook({ close, id, status }) {
  const { t } = useTranslation();
  const editBook = UseEditBook(id);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema()),
    mode: "onChange",
    defaultValues: {
      status: status || 0,
    },
  });

  function onSubmit(data: formData) {
    editBook
      .mutateAsync(data)
      .then((response) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t("Edit book")}</DialogTitle>
      <DialogContent>
        <Input
          control={control}
          error={errors?.status}
          label={t("Status of book")}
          name="status"
          isRequired={true}
          type="number"
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            reset();
            close();
          }}
        >
          {t("Close")}
        </Button>
        <Button variant="contained" type="submit" disabled={!isValid}>
          {t("Save")}
        </Button>
      </DialogActions>
    </form>
  );
}
