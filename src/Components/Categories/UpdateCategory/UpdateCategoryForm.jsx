import { useState, useEffect, useContext } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import AntSwitch from "../../Common/AntSwitch";

export default function UpdateCategoryForm() {
  const { auth } = useContext(DataContext); // Retrieve the author from context
  const [categoryName, setCategoryName] = useState("");
  const [authorName, setAuthorName] = useState(""); // Initialize as an empty string
  const [isActive, setIsActive] = useState(true);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const { categoryID } = useParams(); // Get categoryID from URL params

  useEffect(() => {
    loadCategory();
  }, [categoryID]);

  const loadCategory = async () => {
    try {
      const { data } = await axios.get(`/category/${categoryID}`);
      setCategoryName(data.name);
      // Assuming 'data.author' contains the author object
      setAuthorName(data.author?.name || ""); // Extract name from the author object
      setIsActive(data.status === "active");
      setId(data._id);
    } catch (err) {
      toast.error("Failed to load category data");
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.put(`/category/${id}`, {
        name: categoryName,
        author: auth.user, // Send the complete author object
        status: isActive ? "active" : "inactive",
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Category updated successfully");
        navigate("/categories");
      }
    } catch (err) {
      toast.error("Failed to update category");
    }
  };

  return (
    <Stack sx={{ p: "24px", width: "480px", maxWidth: "100%" }} spacing={2}>
      <TextField
        label="Category Name"
        variant="outlined"
        fullWidth
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <TextField
        label="Author Name"
        variant="outlined"
        fullWidth
        value={authorName}
        disabled // Disable the field since the author name is pre-filled
      />
      <Stack direction="row" gap="8px" alignItems="center">
        <AntSwitch
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <Typography>{isActive ? "Active" : "Inactive"}</Typography>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>
        Update
      </Button>
    </Stack>
  );
}
