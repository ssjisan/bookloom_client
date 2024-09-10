import {
  Chip,
  IconButton,
  MenuItem,
  Popover,
  TableBody,
  TableRow,
  Tooltip,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Remove, More, Edit } from "../../../../assets/IconSet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import RemoveModal from "../../RemovePublisher/RemoveModal";

export default function Body({
  publishers,
  page,
  rowsPerPage,
  selectedPublisher,
  setSelectedPublisher,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [publisherToDelete, setPublisherToDelete] = useState(null);

  const handleOpenMenu = (event, events) => {
    setOpen(event.currentTarget);
    setSelectedPublisher(events);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/publisher/${data._id}`);
  };

  const removeProduct = async (id) => {
    try {
      const loadingToastId = toast.loading("Deleting publisher...");
      await axios.delete(`/publisher/${id}`);
      toast.success("Publisher deleted successfully", { id: loadingToastId });
      window.location.reload(); // Reloading the page to reflect the changes
    } catch (err) {
      console.log(err.message);
      toast.error("Unable to delete category at the moment.");
    }
  };

  const handleConfirmRemove = () => {
    if (publisherToDelete) {
      removeProduct(publisherToDelete._id);
      setIsModalOpen(false);
      setPublisherToDelete(null);
    }
  };
  const formatDate = (isoDateString) => {
    return moment(isoDateString).format("DD MMM, YYYY HH:mm");
  };
  return (
    <TableBody>
      {publishers
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell
              component="th"
              scope="row"
              sx={{ padding: "16px", width: "360px" }}
            >
              {data.publisherID}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "420px" }}>
              {data.name}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
              {data?.author?.name}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "320px" }}>
              {formatDate(data.createdAt)}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px" }}>
              {data.status === "inactive" ? (
                <Chip
                  label="inactive"
                  color="error"
                  sx={{
                    background: "rgba(220, 53, 69, 0.16)",
                    color: "#DC3545",
                  }}
                />
              ) : (
                <Chip
                  label="active"
                  color="success"
                  sx={{
                    background: "rgba(25, 135, 84, 0.16)",
                    color: "#198754",
                  }}
                />
              )}
            </TableCell>
            <TableCell align="center">
              <Tooltip title="Actions">
                <IconButton
                  sx={{ width: "40px", height: "40px" }}
                  onClick={(event) => handleOpenMenu(event, data)}
                >
                  <More color="#919EAB" size={24} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      <Popover
        open={open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            width: 160,
            p: "8px",
            borderRadius: "8px",
            boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
          },
        }}
      >
        <MenuItem
          sx={{ display: "flex", gap: "16px", mb: "8px", borderRadius: "8px" }}
          onClick={(e) => redirectEdit(e, selectedPublisher)}
        >
          <Edit color="#919EAB" size={20} />
          Edit
        </MenuItem>
        <MenuItem
          sx={{
            color: "error.main",
            display: "flex",
            gap: "16px",
            borderRadius: "8px",
          }}
          onClick={() => {
            setPublisherToDelete(selectedPublisher);
            setIsModalOpen(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={20} /> Delete
        </MenuItem>
      </Popover>
      <RemoveModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        publisherName={publisherToDelete ? publisherToDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  publishers: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  selectedPublisher: PropTypes.any,
  setSelectedPublisher: PropTypes.any,
};
