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
import { UseCreateBook } from "../../../hooks/requests";

type formData = {
  isbn: number;
} & void;

export default function CreateBook({ close }) {
  const { t } = useTranslation();
  const createBook = UseCreateBook();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema()),
    mode: "onChange",
    defaultValues: {
      isbn: 0,
    },
  });

  function onSubmit(data: formData) {
    createBook
      .mutateAsync(data)
      .then((response) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t("Create new book")}</DialogTitle>
      <DialogContent>
        <Input
          control={control}
          error={errors?.isbn}
          label={t("ISBN of book")}
          name="isbn"
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
