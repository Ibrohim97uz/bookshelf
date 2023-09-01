import * as yup from "yup";
import i18next from "i18next";

function schema() {
  return yup.object().shape({
    status: yup.number().required(i18next.t("Status is required!")),
  });
}
export default schema;
