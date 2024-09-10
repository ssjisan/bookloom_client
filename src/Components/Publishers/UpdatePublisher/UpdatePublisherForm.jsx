import { useState, useEffect, useContext } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import AntSwitch from "../../Common/AntSwitch";

export default function UpdatePublisherForm() {
  const { auth } = useContext(DataContext); // Retrieve the author from context
  const [publisherName, setPublisherName] = useState(""); // Updated from categoryName to publisherName
  const [authorName, setAuthorName] = useState(""); // Initialize as an empty string
  const [isActive, setIsActive] = useState(true);
  const [id, setId] = useState(""); // Holds the publisher's ID
  const navigate = useNavigate();
  const { publisherID } = useParams(); // Get publisherID from URL params

  useEffect(() => {
    loadPublisher();
  }, [publisherID]);

  const loadPublisher = async () => {
    try {
      const { data } = await axios.get(`/publisher/${publisherID}`);
      setPublisherName(data.name);
      setAuthorName(data.author?.name || ""); // Extract name from the author object
      setIsActive(data.status === "active");
      setId(data._id);
    } catch (err) {
      toast.error(`Failed to load publisher data: ${err.message}`);
    }
  };

  const handleSubmit = async () => {
    if (!publisherName.trim()) {
      toast.error("Publisher name cannot be empty");
      return;
    }

    try {
      const { data } = await axios.put(`/publisher/${id}`, {
        name: publisherName,
        author: auth.user, // Send the complete author object
        status: isActive ? "active" : "inactive",
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Publisher updated successfully");
        navigate("/publishers");
      }
    } catch (err) {
      toast.error(`Failed to update publisher: ${err.message}`);
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
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <Typography>{isActive ? "Active" : "Inactive"}</Typography>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>
        Update Publisher
      </Button>
    </Stack>
  );
}
