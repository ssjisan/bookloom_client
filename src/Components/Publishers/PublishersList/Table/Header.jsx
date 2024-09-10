import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="left">Publisher ID</TableCell>
        <TableCell align="left">Category Name</TableCell>
        <TableCell align="left">Author</TableCell>
        <TableCell align="left">Create at</TableCell>
        <TableCell align="left">Status</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}
