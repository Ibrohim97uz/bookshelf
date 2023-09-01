import { useEffect } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { handleResponse } from "./handleResponse";
import { registerSchema } from "./schemas";
import Input, { InputProps } from "../../../shared-components/Input";
import { UseRegisterUser } from "../../../hooks/requests";
import { getAuthKey, mainPage } from "../../../utils/getAuthKey";
import Language from "../../../shared-components/language";

type SubmitForm = {
  name: string;
  email: string;
  Key: string;
  Secret: string;
} & void;

export default function RegisterTab() {
  const { t } = useTranslation();
  const registerUser = UseRegisterUser();
  const navigate = useNavigate();

  const { Key, Secret } = getAuthKey();

  useEffect(() => {
    if (Key && Secret) {
      navigate(mainPage);
    }
  }, [navigate, Key, Secret]);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema()),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      Key: "",
      Secret: "",
    },
  });

  const onSubmit = (data: SubmitForm) => {
    registerUser
      .mutateAsync(data)
      .then((d) =>
        handleResponse(d?.data).then(() => {
          window.location.reload();
          navigate(mainPage);
        })
      )
      .catch((err) => console.log(err));
  };

  const fields: Array<Partial<InputProps>> = [
    { name: "name", label: t("Your Name"), isRequired: true },
    { name: "email", label: t("Your Email"), isRequired: true },
    { name: "Key", label: t("Your Key"), isRequired: true },
    {
      name: "Secret",
      label: t("Your Secret"),
      isRequired: true,
      type: "password",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Card sx={{ width: "400px", height: "450px", backgroundColor: "#eee" }}>
        <div
          style={{
            backgroundColor: "#314261",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Language />
        </div>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => (
              <Input
                key={index}
                control={control}
                error={errors[item.name]}
                label={item.label}
                name={item.name}
                type={item.type}
              />
            ))}

            <Button
              sx={{ marginTop: "10px" }}
              disabled={!isValid}
              type="submit"
              variant="contained"
              fullWidth
            >
              {t("Register")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
