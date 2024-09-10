import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateSelectedCategory from "../Components/Categories/UpdateCategory/UpdateSelectedCategory";

export default function UpdateCategory() {
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
            <UpdateSelectedCategory/>
          </Box>
        </Box>
      </Box>
    );
  }
  