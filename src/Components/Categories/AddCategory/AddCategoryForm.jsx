import { useState, useContext } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AntSwitch from "../../Common/AntSwitch";

export default function AddCategoryForm() {
  const { auth } = useContext(DataContext); // Retrieve the author from context
  const [categoryName, setCategoryName] = useState("");
  //eslint-disable-next-line
  const [authorName, setAuthorName] = useState(auth?.user?.name || "");
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!categoryName) {
      toast.error("Please fill in the Category Name.");
      return;
    }

    console.log("Category Name:", categoryName);
    console.log("Author Name:", authorName);
    console.log("Is Active:", isActive);

    // Prepare data for submission
    const categoryData = {
      name: categoryName,
      author: authorName, // Use the author from the context
      status: isActive ? "active" : "inactive",
    };

    try {
      // Send POST request to your backend API
      const response = await axios.post("/create_category", categoryData);

      if (response.status === 201) {
        toast.success("Category created successfully!");
        // Optionally, reset form fields after successful submission
        setCategoryName("");
        setIsActive(true);
        navigate("/categories"); // Redirect to the category list page
      } else {
        toast.error(response.data.error || "Failed to create category.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred. Please try again later.");
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
          onChange={(e) => {
            setIsActive(e.target.checked);
            console.log("Switch Checked:", e.target.checked);
          }}
        />
        <Typography>{isActive ? "Active" : "Inactive"}</Typography>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
