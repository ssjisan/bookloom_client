import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllCategoryList from "../Components/Categories/CategoryList/AllCategoryList";

export default function CategoryList() {
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
          <AllCategoryList />
        </Box>
      </Box>
    </Box>
  );
}
