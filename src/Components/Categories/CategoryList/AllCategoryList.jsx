import { Box, Typography } from "@mui/material";
import CategoryTable from "./CategoryTable";

export default function AllCategoryList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">All Categories</Typography>
      </Box>
      <CategoryTable />
    </Box>
  );
}
