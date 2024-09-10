import { Box, Card, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { ArrowLeft } from "../assets/IconSet";
import { useNavigate } from "react-router-dom";
import BookListPart from "../Components/SellBooks/BookListPart";

export default function SellBook() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Navigates to the previous route in the browser history
  };
  return (
    <Box>
      <Stack
        sx={{ p: "16px 40px", backgroundColor: "#F4F0FF" }}
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
      <Box sx={{ p: "40px" }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
            <Card>
              <BookListPart />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
            <Card>Sale Details</Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
