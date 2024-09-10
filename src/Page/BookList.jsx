import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllBookList from "../Components/Books/BookList/AllBookList";

export default function BookList() {
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
          <AllBookList />
        </Box>
      </Box>
    </Box>
  );
}
