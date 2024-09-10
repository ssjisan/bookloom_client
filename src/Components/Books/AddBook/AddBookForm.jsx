import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import ImageView from "./ImageView";
import toast from "react-hot-toast";
import axios from "axios";
import FormView from "./FormVIew";
import { useNavigate } from "react-router-dom";

export default function AddBookForm() {
  const [allCategories, setAllCategories] = useState([]);
  const [allPublishers, setAllPublishers] = useState([]);
  const [imageCover, setImageCover] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [writer, setWriter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
    loadPublishers();
  }, []);
  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAllCategories(data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const loadPublishers = async () => {
    try {
      const { data } = await axios.get("/publishers");
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAllPublishers(data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const bookData = new FormData();
      bookData.append("image", imageCover);
      bookData.append("name", name);
      bookData.append("category", category);
      bookData.append("publisher", publisher);
      bookData.append("purchasePrice", purchasePrice);
      bookData.append("sellPrice", sellPrice);
      bookData.append("quantity", quantity);
      bookData.append("writer", writer);
  
      const { data } = await axios.post("/add_book", bookData);
      if (data?.error) {
        toast.error(data.error); // Display the error message from the backend
      } else {
        toast.success("Book Added");
        navigate("/booklist");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || `Book creation failed: ${err.message}`);
    }
  };
  
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
          <FormView
            allCategories={allCategories}
            setAllCategories={setAllCategories}
            allPublishers={allPublishers}
            setAllPublishers={setAllPublishers}
            publisher={publisher}
            setPublisher={setPublisher}
            name={name}
            setName={setName}
            purchasePrice={purchasePrice}
            setPurchasePrice={setPurchasePrice}
            quantity={quantity}
            setQuantity={setQuantity}
            writer={writer}
            setWriter={setWriter}
            sellPrice={sellPrice}
            category={category}
            setCategory={setCategory}
            setSellPrice={setSellPrice}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
          <ImageView imageCover={imageCover} setImageCover={setImageCover} />
        </Grid>
      </Grid>
      <Stack direction="row" sx={{ p: "24px 0px" }} gap="16px">
        <Button variant="outlined" color="inherit" type="button">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleAddBook}>Save</Button>
      </Stack>
    </Box>
  );
}
