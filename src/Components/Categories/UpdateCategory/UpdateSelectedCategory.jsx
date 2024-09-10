import { Box, Typography } from "@mui/material";

import UpdateCategoryForm from "./UpdateCategoryForm";

export default function UpdateSelectedCategory() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Update a Category</Typography>
      </Box>
      <UpdateCategoryForm />
    </Box>
  );
}
