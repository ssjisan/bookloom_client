import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Autocomplete } from "@mui/material";
import { Plus } from "../../assets/IconSet";
import axios from "axios";

export default function BookEntryScreen() {
  const [bookList, setBookList] = useState([]);
  const [formValues, setFormValues] = useState({
    invoiceID: "",
    bookCode: "",
    bookName: "",
    writerName: "",
    category: "",
    publisher: "",
    stock: "",
    sellQty: "",
    sellPrice: "",
  });

  // Fetch the book list from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("/booklist");
        setBookList(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Handle book selection (from either bookCode or bookName)
  const handleBookSelect = (book) => {
    if (book) {
      setFormValues({
        ...formValues,
        bookCode: book.bookID || "",
        bookName: book.name || "",
        writerName: book.writer || "",
        category: book.category.name || "",
        publisher: book.publisher.name || "",
        stock: book.quantity || "",
        sellPrice: book.sellPrice || "",
      });
    }
  };

  // Handle field change for sellQty and other inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Stack
      gap="24px"
      sx={{
        p: "24px",
        height: "calc(100vh - 60px)",
        borderRight: "1px solid rgba(145, 158, 171, 0.24)",
      }}
    >
      {/* Invoice ID */}
      <TextField
        label="Invoice ID"
        variant="outlined"
        fullWidth
        name="invoiceID"
        value={formValues.invoiceID}
        onChange={handleChange}
      />

      {/* Combined Book Code and Book Name Autocomplete */}
      <Autocomplete
        options={bookList}
        getOptionLabel={(option) =>
          `${option.bookID || ""} - ${option.name || ""}`
        }
        onChange={(e, value) => handleBookSelect(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by Book Code or Name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      {/* Other Fields (Automatically Populated) */}
      <TextField
        label="Book Code"
        variant="outlined"
        fullWidth
        name="bookCode"
        value={formValues.bookCode}
        onChange={handleChange}
      />
      <TextField
        label="Book Name"
        variant="outlined"
        fullWidth
        name="bookName"
        value={formValues.bookName}
        onChange={handleChange}
      />
      <TextField
        label="Writer Name"
        variant="outlined"
        fullWidth
        name="writerName"
        value={formValues.writerName}
        onChange={handleChange}
      />
      <TextField
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
        value={formValues.category}
        onChange={handleChange}
      />
      <TextField
        label="Publisher"
        variant="outlined"
        fullWidth
        name="publisher"
        value={formValues.publisher}
        onChange={handleChange}
      />
      <TextField
        label="Stock"
        variant="outlined"
        fullWidth
        name="stock"
        value={formValues.stock}
        onChange={handleChange}
      />

      {/* Sell Quantity (User Input) */}
      <TextField
        label="Sell Qty"
        variant="outlined"
        fullWidth
        name="sellQty"
        value={formValues.sellQty}
        onChange={handleChange}
      />
      <TextField
        label="Sell Price"
        variant="outlined"
        fullWidth
        name="sellPrice"
        value={formValues.sellPrice}
        onChange={handleChange}
      />

      {/* Spacer to push the button to the bottom */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Button at the bottom */}
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid rgba(145, 158, 171, 0.24)",
          pt: "12px",
        }}
      >
        <Button
          sx={{ width: "100%" }}
          startIcon={<Plus size={20} color={"#7635DC"} />}
        >
          Add to List
        </Button>
      </Box>
    </Stack>
  );
}
