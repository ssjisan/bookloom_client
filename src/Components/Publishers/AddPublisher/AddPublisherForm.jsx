import { useState, useContext } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AntSwitch from "../../Common/AntSwitch";

export default function AddPublisherForm() {
  const { auth } = useContext(DataContext); // Retrieve the author from context
  const [publisherName, setPublisherName] = useState("");
  //eslint-disable-next-line
  const [authorName, setAuthorName] = useState(auth?.user?.name || "");
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!publisherName) {
      toast.error("Please fill in the Publisher Name.");
      return;
    }

    // Prepare data for submission
    const publisherData = {
      name: publisherName,
      author: authorName, // Use the author from the context
      status: isActive ? "active" : "inactive",
    };

    try {
      // Send POST request to your backend API
      const response = await axios.post("/create_publisher", publisherData);

      if (response.status === 201) {
        toast.success("Publisher created successfully!");
        // Optionally, reset form fields after successful submission
        setPublisherName("");
        setIsActive(true);
        navigate("/publishers"); // Redirect to the publisher list page
      } else {
        toast.error(response.data.error || "Failed to create publisher.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred. Please try again later.");
    }
  };

  return (
    <Stack sx={{ p: "24px", width: "480px", maxWidth: "100%" }} spacing={2}>
      <TextField
        label="Publisher Name"
        variant="outlined"
        fullWidth
        value={publisherName}
        onChange={(e) => setPublisherName(e.target.value)}
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
