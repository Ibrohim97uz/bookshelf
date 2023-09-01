import * as yup from "yup";
import i18next from "i18next";

function schema() {
  return yup.object().shape({
    isbn: yup.number().required(i18next.t("ISBN is required!")).positive(),
  });
}
export default schema;
