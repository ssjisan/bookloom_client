import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowLeft } from "../assets/IconSet";
import { useNavigate } from "react-router-dom";
import BookEntryScreen from "../Components/SellBooks/BookEntryScreen";
import BookAddedScreen from "../Components/SellBooks/BookAddedScreen";

export default function SellBook() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Navigates to the previous route in the browser history
  };
  return (
    <Box>
      <Stack
        sx={{ p: "16px 40px", backgroundColor: "#F4F0FF", height: "60px" }}
        direction={"row"}
      >
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap="4px"
          onClick={handleBack}
          sx={{ cursor: "pointer" }}
        >
          <ArrowLeft size={20} color="#000" />
          <Typography>Back</Typography>
        </Stack>
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
          Sell Book
        </Typography>
      </Stack>
      <Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 4, md: 3, lg: 3 }}>
            <BookEntryScreen />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
            <BookAddedScreen />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
