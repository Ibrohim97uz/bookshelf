import { Fragment, HTMLInputTypeAttribute } from "react";
import { TextField } from "@mui/material";
import { Control, Controller, FieldValues, FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export interface InputProps {
  control: Control<FieldValues, any>;
  error: FieldError;
  label: string;
  isRequired?: boolean;
  name: string;
  type?: HTMLInputTypeAttribute;
}

const Input: React.FC<InputProps> = ({
  control,
  error,
  label,
  isRequired = false,
  name,
  type = "text",
}) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            sx={{ marginTop: "20px" }}
            required={isRequired}
            error={!!error?.message}
            label={label}
            fullWidth
            type={type}
            {...field}
          />
        )}
      />
      <ErrorMessage error={error?.message} />
    </Fragment>
  );
};

export default Input;
