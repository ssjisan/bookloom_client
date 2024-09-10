import {
  Box,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TableBody,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Remove, More, Edit } from "../../../../assets/IconSet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveModal from "../../../Categories/RemoveCategory/RemoveModal";
import axios from "axios";
import toast from "react-hot-toast";

export default function Body({
  books,
  page,
  rowsPerPage,
  selectedBook,
  setSelectedBook,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const handleOpenMenu = (event, events) => {
    setOpen(event.currentTarget);
    setSelectedBook(events);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/book/${data.slug}`);
  };

  const removeProduct = async (id) => {
    try {      
      const loadingToastId = toast.loading("Deleting Book...");
      console.log(`Deleting book with ID: ${id}`); // Debugging line
      await axios.delete(`/book/${id}`);
      toast.success("Book deleted successfully", { id: loadingToastId });
      window.location.reload(); // Reloading the page to reflect the changes
    } catch (err) {
      console.log(`Error deleting book: ${err.message}`); // Debugging line
      toast.error("Unable to delete this book at the moment.");
    }
  };
  

  const handleConfirmRemove = () => {
    if (bookToDelete) {
      removeProduct(bookToDelete._id);
      setIsModalOpen(false);
      setBookToDelete(null);
    }
  };
  
  return (
    <TableBody>
      {books
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell
              component="th"
              scope="row"
              sx={{ padding: "16px", width: "360px" }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`${process.env.REACT_APP_SERVER_API}/book/image/${data._id}`}
                    alt={data.name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "274px",
                  }}
                >
                  <Typography variant="subtitle2" noWrap>
                    {data.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {data.bookID}
                  </Typography>
                </Box>
              </Stack>
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "420px" }}>
              {data.writer}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
              {data?.category?.name}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
              {data?.publisher?.name}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "360px" }}>
              {data.quantity}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "320px" }}>
              {data.purchasePrice}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "320px" }}>
              {data.sellPrice}
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
          onClick={(e) => redirectEdit(e, selectedBook)}
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
            setBookToDelete(selectedBook);
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
        bookName={bookToDelete ? bookToDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  books: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  selectedBook: PropTypes.any,
  setSelectedBook: PropTypes.any,
};
