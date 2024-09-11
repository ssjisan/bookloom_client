import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { Remove } from "../../../assets/IconSet";

export default function Body() {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          component="th"
          scope="row"
          sx={{ padding: "16px", width: "140px" }}
        >
          Code
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "420px" }}>
          Book Name
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
          Category
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
          Writer
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
          Publisher
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
          <TextField size="small" variant="outlined" />
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
          Price
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
          <TextField size="small" variant="outlined" />
        </TableCell>
        <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
          Total
        </TableCell>
        <TableCell align="center">
          <Tooltip title="Actions">
            <IconButton sx={{ width: "40px", height: "40px" }}>
              <Remove color="#FF1F00" size={24} />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
