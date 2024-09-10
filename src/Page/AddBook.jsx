import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddNewBook from "../Components/Books/AddBook/AddNewBook";

export default function AddBook() {
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
          <AddNewBook />
        </Box>
      </Box>
    </Box>
  );
}
