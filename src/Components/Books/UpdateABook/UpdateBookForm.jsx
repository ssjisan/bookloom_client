import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import ImageView from "./ImageView";
import toast from "react-hot-toast";
import axios from "axios";
import FormView from "./FormVIew";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBookForm() {
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
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
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

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const { data } = await axios.get(`/book/${params.slug}`);
      console.log(data, "Book");
      setImageCover(data.image);
      setName(data.name);
      setCategory(data?.category?._id);
      setPublisher(data?.publisher?._id);
      setPurchasePrice(data.purchasePrice);
      setQuantity(data.quantity);
      setSellPrice(data.sellPrice);
      setWriter(data.writer);
      setId(data._id);
    } catch (err) {
      toast.error("Failed to load event data");
    }
  };
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const bookData = new FormData();
      bookData.append("image", imageCover); // Only if the user updates the image
      bookData.append("name", name);
      bookData.append("category", category);
      bookData.append("publisher", publisher);
      bookData.append("purchasePrice", purchasePrice);
      bookData.append("sellPrice", sellPrice);
      bookData.append("quantity", quantity);
      bookData.append("writer", writer);

      // Make an API request to update the book by ID
      const { data } = await axios.put(`/book/${id}`, bookData);

      if (data?.error) {
        toast.error(data.error); // Display the error message from the backend
      } else {
        navigate("/booklist");
        window.location.reload();
        toast.success("Book updated successfully");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error || `Book update failed: ${err.message}`
      );
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
          <ImageView
            imageCover={imageCover}
            setImageCover={setImageCover}
            id={id}
            setId={setId}
          />
        </Grid>
      </Grid>
      <Stack direction="row" sx={{ p: "24px 0px" }} gap="16px">
        <Button variant="outlined" color="inherit" type="button">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleUpdateBook}>
          Update
        </Button>
      </Stack>
    </Box>
  );
}
