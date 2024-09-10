import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateSelectedPublisher from "../Components/Publishers/UpdatePublisher/UpdateSelectedPublisher";

export default function UpdatePublisher() {
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
            <UpdateSelectedPublisher/>
          </Box>
        </Box>
      </Box>
    );
  }
  