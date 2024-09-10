import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="left">Book Name</TableCell>
        <TableCell align="left">Writer</TableCell>
        <TableCell align="left">Category</TableCell>
        <TableCell align="left">Publisher</TableCell>
        <TableCell align="left">Stock</TableCell>
        <TableCell align="left">Purchase Price</TableCell>
        <TableCell align="left">Sell Price</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}
