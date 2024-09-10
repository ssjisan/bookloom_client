import { Box, Typography } from "@mui/material";

import AddCategoryForm from "./AddCategoryForm";

export default function AddNewCategory() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Add a Category</Typography>
      </Box>
      <AddCategoryForm />
    </Box>
  );
}
