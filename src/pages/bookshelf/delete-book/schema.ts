import * as yup from "yup";
import i18next from "i18next";

function schema() {
  return yup.object().shape({
    id: yup.number().required(i18next.t("Status is required!")).positive(),
  });
}
export default schema;
