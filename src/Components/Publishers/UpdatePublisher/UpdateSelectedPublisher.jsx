import { Box, Typography } from "@mui/material";
import UpdatePublisherForm from "./UpdatePublisherForm";

export default function UpdateSelectedPublisher() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Update a Publisher</Typography>
      </Box>
      <UpdatePublisherForm />
    </Box>
  );
}
