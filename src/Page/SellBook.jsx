import { Box, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowLeft } from "../assets/IconSet";
import { useNavigate } from "react-router-dom";
import BookEntryScreen from "../Components/SellBooks/BookEntryScreen";
import BookAddedScreen from "../Components/SellBooks/BookAddedScreen";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SellBook() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Navigates to the previous route in the browser history
  };

  const [bookList, setBookList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [addedBooks, setAddedBooks] = useState([]); // New state for added books

  const [formValues, setFormValues] = useState({
    bookCode: "",
    bookName: "",
    writerName: "",
    category: "",
    publisher: "",
    stock: "",
    sellQty: "",
    sellPrice: "",
  });
  const [activeField, setActiveField] = useState(null);

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

  // Handle book selection
  const handleSelectBook = (book) => {
    setFormValues({
      ...formValues,
      bookCode: book.bookID,
      bookName: book.name,
      writerName: book.writer,
      category: book.category.name,
      publisher: book.publisher.name,
      stock: book.quantity,
      sellPrice: book.sellPrice,
    });
    setFilteredBooks([]);
  };

  // Filter book suggestions based on input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "sellQty") {
      if (parseInt(value) > formValues.stock) {
        return; // Prevent selling more than available stock
      }
    }
    setFormValues({ ...formValues, [name]: value });
    if (value.length >= 3) {
      if (name === "bookCode") {
        setActiveField("bookCode");
        setFilteredBooks(bookList.filter((book) => book.bookID.toLowerCase().includes(value.toLowerCase())));
      } else if (name === "bookName") {
        setActiveField("bookName");
        setFilteredBooks(bookList.filter((book) => book.name.toLowerCase().includes(value.toLowerCase())));
      }
    } else {
      setFilteredBooks([]);
    }
  };

  // Render the suggestion list only for the active field
  const renderSuggestions = () => {
    if (filteredBooks.length > 0) {
      return (
        <Paper
          elevation={3}
          style={{
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            backgroundColor: "#fff", // Fully visible background
            borderRadius: "4px",
          }}
        >
          <List>
            {filteredBooks.map((book) => (
              <ListItem
                key={book.bookID}
                button
                onClick={() => handleSelectBook(book)}
                style={{ padding: "8px 16px" }}
              >
                {activeField === "bookCode" ? book.bookID : book.name} -{" "}
                {activeField === "bookCode" ? book.name : book.bookID}
              </ListItem>
            ))}
          </List>
        </Paper>
      );
    }
    return null;
  };

  const handleAddToList = () => {
    setAddedBooks([...addedBooks, { ...formValues, sellQty: parseInt(formValues.sellQty) }]);
    setFormValues({
      bookCode: "",
      bookName: "",
      writerName: "",
      category: "",
      publisher: "",
      stock: "",
      sellQty: "",
      sellPrice: "",
    });
  };
  console.log(addedBooks,"AAAA");
  
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
            <BookEntryScreen
              handleInputChange={handleInputChange}
              formValues={formValues}
              activeField={activeField}
              renderSuggestions={renderSuggestions}
              handleAddToList={handleAddToList}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
            <BookAddedScreen addedBooks={addedBooks}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
