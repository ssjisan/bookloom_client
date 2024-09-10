import { Box, Typography } from "@mui/material";
import UpdateBookForm from "./UpdateBookForm";

export default function UpdateSelectedBook() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Update a Book</Typography>
      </Box>
      <UpdateBookForm />
    </Box>
  )
}
