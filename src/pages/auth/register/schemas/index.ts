import * as yup from "yup";
import i18n from "i18next";

function registerSchema() {
  const requiredField = i18n.t("Required field");

  return yup.object().shape({
    name: yup.string().required(requiredField),
    email: yup
      .string()
      .email(i18n.t("It must be an email"))
      .required(requiredField),
    Key: yup.string().required(requiredField),
    Secret: yup.string().required(requiredField),
  });
}

export { registerSchema };
