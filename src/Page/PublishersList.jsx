import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllPublisherList from "../Components/Publishers/PublishersList/AllPublisherList";

export default function PublishersList() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Box>
          <AllPublisherList />
        </Box>
      </Box>
    </Box>
  );
}
