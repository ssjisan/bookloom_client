import {
  Box,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { useState, useEffect } from "react";
import Header from "./Table/Header";
import Body from "./Table/BOdy";

export default function BookAddedScreen({ addedBooks, setAddedBooks }) {
  const [books, setBooks] = useState(addedBooks);
  const [vatPercent, setVatPercent] = useState(0);
  console.log(addedBooks, "SSS");

  useEffect(() => {
    setBooks(addedBooks);
  }, [addedBooks]);

  const handleRemove = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
    setAddedBooks(newBooks);
  };

  const handleQtyChange = (index, value) => {
    const newBooks = [...books];
    newBooks[index].sellQty = value;
    setBooks(newBooks);
    setAddedBooks(newBooks);
  };

  const handleVatChange = (e) => {
    setVatPercent(parseFloat(e.target.value)||0);
  };

  const calculateTotal = () => {
    if (Array.isArray(books)) {
      return books.reduce(
        (total, book) => total + (book.sellQty || 0) * (book.sellPrice || 0),
        0
      );
    }
    return 0;
  };

  const calculateVat = (total) => {
    return (total * vatPercent) / 100;
  };

  const total = calculateTotal();
  const vat = calculateVat(total);
  const totalWithVat = total + vat;

  return (
    <Stack sx={{ p: "24px", height: "calc(100vh - 60px)" }}>
      <TableContainer>
        <Table>
          <Header />
          <Body
            books={books}
            handleQtyChange={handleQtyChange}
            vatPercent={vatPercent}
            handleRemove={handleRemove}
          />
        </Table>
      </TableContainer>
      <Stack
        sx={{ flexGrow: 1, width: "100%" }}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <Stack sx={{ width: "280px", p: "12px 0px" }} gap="8px">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="body2">Total Amount:</Typography>
            <Typography variant="body2">{total.toFixed(2)}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="body2">VAT%:</Typography>
            <TextField
              size="small"
              variant="outlined"
              type="number"
              value={vatPercent}
              onChange={handleVatChange}
              sx={{
                width: "60px",
                // Remove spinner arrows for Chrome, Safari, Edge, Opera
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                // Remove spinner arrows for Firefox
                "& input[type=number]": {
                  "-moz-appearance": "textfield",
                },
              }}
              inputProps={{
                style: { textAlign: "right" }, // Align text to the right
              }}
            />
          </Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="body2">VAT Amount:</Typography>
            <Typography variant="body2">{vat.toFixed(2)}</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Total with VAT:</Typography>
            <Typography variant="h6">{totalWithVat.toFixed(2)}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap="16px"
          sx={{
            p: "12px 0px 0px 0px",
            borderTop: "1px solid rgba(145, 158, 171, 0.24)",
            width: "100%",
          }}
        >
          <Button>Cancle</Button>
          <Button>Save</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
