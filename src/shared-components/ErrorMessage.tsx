import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ErrorMessage({ error }) {
  return (
    <div style={{ position: "relative" }}>
      {error ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Typography
            color="error"
            sx={{ fontSize: "0.8em", position: "absolute" }}
          >
            {error}
          </Typography>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
