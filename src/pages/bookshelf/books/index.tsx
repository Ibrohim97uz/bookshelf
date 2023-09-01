import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { UseGetAllBooks } from "../../../hooks/requests";
import HandleDelete from "../delete-book/HandleDelete";
import HandleEdit from "../edit-book/HandleEdit";
import i18next from "i18next";

export default function Books() {
  const { t } = useTranslation();
  const { data, isLoading, isError } = UseGetAllBooks();

  if (isLoading) {
    return t("Loading....");
  }

  if (isError) {
    return t("Something went wrong...");
  }

  if (!data?.data?.data?.length) {
    return t("Empty list");
  }

  return data?.data?.data?.map((item, index: number) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/200"
        title="green iguana"
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {index + 1}-Book
          </Typography>

          {getBookStatus(item?.status)}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {t("This is book description")}
        </Typography>
      </CardContent>
      <CardActions>
        <HandleDelete id={item?.book?.id} />
        <HandleEdit id={item?.book?.id} status={item?.status} />
      </CardActions>
    </Card>
  ));
}

function getBookStatus(status: number) {
  switch (status) {
    case 0:
      return <Chip label={i18next.t("New")} color="success" />;
    case 1:
      return <Chip label={i18next.t("Reading")} color="warning" />;
    default:
      return <Chip label={i18next.t("Finished")} color="error" />;
  }
}
