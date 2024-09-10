import { Box, Typography } from "@mui/material";
import AddBookForm from "./AddBookForm";

export default function AddNewBook() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Add a Book</Typography>
      </Box>
      <AddBookForm />
    </Box>
  )
}
