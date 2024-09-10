import { Box, Typography, useMediaQuery } from "@mui/material";
import InputFields from "../Components/Login/InputFields";
export default function Login() {
  const forBelow776 = useMediaQuery("(max-width:776px)");
  return (
    <Box>
      <Box sx={{ p: "24px 40px" }}>
        <img src="/logo2.svg" />
      </Box>
      <Box
        sx={{
          padding: forBelow776 ? "0px 20px" : "0px 40px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "64px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            padding: "20px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "472px",
            maxWidth: "100%",
          }}
        >
          <Typography variant="h4">Hi, Welcome back</Typography>
          <Typography variant="h6" color="text.secondary">
            Sign in to your account
          </Typography>
        </Box>
        <InputFields />
      </Box>
    </Box>
  );
}
