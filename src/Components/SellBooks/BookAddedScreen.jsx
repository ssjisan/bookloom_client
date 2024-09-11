import { Box, Button, Stack, Table, TableContainer, Typography } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";

export default function BookAddedScreen() {
  return (
    <Stack sx={{ p: "24px",height: "calc(100vh - 60px)", }}>
        <TableContainer>
          <Table>
            <Header />
            <Body />
            
          </Table>
        </TableContainer>
        <Stack sx={{flexGrow:1, width:"100%"}} alignItems={"flex-end"} justifyContent={"flex-end"}>
          <Stack sx={{ width: "280px", p:"12px" }} gap="8px">
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="body2" color="text.secondary">Total Quantity</Typography>
              <Typography variant="body2" color="text.secondary">0</Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="body2" color="text.secondary">Total</Typography>
              <Typography variant="body2" color="text.secondary">0</Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="body2" color="text.secondary">Total VAT</Typography>
              <Typography variant="body2" color="text.secondary">0</Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="h6">Total+VAT</Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent="flex-end" gap="16px" sx={{pt:"12px",borderTop: "1px solid rgba(145, 158, 171, 0.24)", width:"100%"}}>
            <Button variant="outlined" color="inherite">Cancle</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Stack>
    </Stack>
  );
}
