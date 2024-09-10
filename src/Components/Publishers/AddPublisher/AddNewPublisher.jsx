import { Box, Typography } from "@mui/material";

import AddPublisherForm from "./AddPublisherForm";

export default function AddNewPublisher() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Add a Publisher</Typography>
      </Box>
      <AddPublisherForm />
    </Box>
  );
}
