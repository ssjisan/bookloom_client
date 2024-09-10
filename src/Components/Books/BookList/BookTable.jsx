import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookTable() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [books, setBooks] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    try {
      const { data } = await axios.get("/booklist");
      setBooks(data);
      console.log(data);
      
    } catch (err) {
      toast.error(`Some problems here, try again:${err.message}`);
    }
  };

  return (
    <Box
      sx={{
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
        p: 2,
        mt: 3,
      }}
    >
      <TableContainer>
        <Table>
          <Header />
          <Body
            books={books}
            page={page}
            rowsPerPage={rowsPerPage}
            isModalOpen={isModalOpen}
            showModal={showModal}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        </Table>
        <Pagination
          books={books}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
