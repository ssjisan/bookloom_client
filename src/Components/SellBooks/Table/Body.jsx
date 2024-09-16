import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { Remove } from "../../../assets/IconSet";

export default function Body({books,handleQtyChange,vatPercent,handleRemove}) {
  
  return (
    <TableBody>
            {books?.map((book, index) => (
              <TableRow key={index}>
                <TableCell sx={{ padding: "16px", width: "140px" }}>{book.bookCode}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "420px" }}>{book.bookName}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>{book.category}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>{book.writerName}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>{book.publisher}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
                  <TextField
                    size="small"
                    variant="outlined"
                    type="number"
                    value={book.sellQty}
                    onChange={(e) => handleQtyChange(index, parseInt(e.target.value))}
                  />
                </TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>{book.sellPrice}</TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
                  <TextField
                    size="small"
                    variant="outlined"
                    type="number"
                    value={vatPercent}
                    disabled
                  />
                </TableCell>
                <TableCell align="left" sx={{ padding: "16px", width: "180px" }}>
                  {book.sellQty * book.sellPrice}
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Remove">
                    <IconButton sx={{ width: "40px", height: "40px" }} onClick={() => handleRemove(index)}>
                      <Remove color="#FF1F00" size={24} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
  );
}