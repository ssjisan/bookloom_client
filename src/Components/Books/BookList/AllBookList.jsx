import { Box, Typography } from "@mui/material";
import BookTable from "./BookTable";

export default function AllBookList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">All Books</Typography>
      </Box>
      <BookTable />
    </Box>
  );
}
