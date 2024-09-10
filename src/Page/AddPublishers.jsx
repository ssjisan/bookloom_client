import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddNewPublisher from "../Components/Publishers/AddPublisher/AddNewPublisher";

export default function AddPublishers() {
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
          <AddNewPublisher />
        </Box>
      </Box>
    </Box>
  );
}
