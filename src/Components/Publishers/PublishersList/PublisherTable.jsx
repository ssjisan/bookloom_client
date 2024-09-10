import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function PublisherTable() {
  const [publishers, setPublishers] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [userRemoveModal, setUserRemoveModal] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    loadPublishers();
  }, []);
  const loadPublishers = async () => {
    try {
      const { data } = await axios.get("/publishers");
      setPublishers(data);
    } catch (err) {
      console.log(err.message);
      toast.error("Data loading problem");
    }
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
            publishers={publishers}
            page={page}
            rowsPerPage={rowsPerPage}
            isModalOpen={isModalOpen}
            userRemoveModal={userRemoveModal}
            showModal={showModal}
            selectedPublisher={selectedPublisher}
            setSelectedPublisher={setSelectedPublisher}
          />
        </Table>
        <Pagination
          publishers={publishers}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
