import { TablePagination } from "@mui/material";
import PropTypes from "prop-types";

export default function Pagination({
  publishers,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[10]}
      component="div"
      count={publishers?.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        borderBottom: "none",
        borderTop: "1px solid rgba(145, 158, 171, 0.24)",
        backgroundColor: "white", // Optional: Add background to avoid transparency issues
      }}
    />
  );
}
Pagination.propTypes = {
  publishers: PropTypes.any,
  rowsPerPage: PropTypes.any,
  page: PropTypes.func,
  handleChangePage: PropTypes.any,
  handleChangeRowsPerPage: PropTypes.any,
};
