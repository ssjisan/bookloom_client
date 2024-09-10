import { Box, Typography } from "@mui/material";
import PublisherTable from "./PublisherTable";

export default function AllPublisherList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">All Publishers</Typography>
      </Box>
      <PublisherTable />
    </Box>
  );
}
