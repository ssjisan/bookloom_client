import { Box, Button, Stack } from "@mui/material";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function ImageView({ imageCover, setImageCover, id,bookName }) {
  const inputRef = useRef(null);

  const handleBoxClick = () => {
    inputRef.current.click();
  };
  return (
    <div className="col">
      {imageCover ? (
        <Box
          sx={{
            width: "260px",
            height: "320px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={URL.createObjectURL(imageCover)}
            alt={bookName}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "260px",
            height: "320px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={`${
              process.env.REACT_APP_SERVER_API
            }/book/image/${id}?${new Date().getTime()}`}
            alt={bookName}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}
      <Stack sx={{ mt: "40px",width:"260px" }} justifyContent="flex-end">
        <Button color="primary" onClick={handleBoxClick} variant="outlined">
          Change
          <input
            type="file"
            accept="image/*"
            name="image"
            ref={inputRef}
            onChange={(e) => {
              setImageCover(e.target.files[0]);
            }}
            hidden
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Button>
      </Stack>
    </div>
  );
}

ImageView.propTypes = {
  imageCover: PropTypes.any,
  setImageCover: PropTypes.any,
  id: PropTypes.any,
  bookName: PropTypes.any,
};