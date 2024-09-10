import { Box, Card, CardContent, CardMedia, Typography  } from "@mui/material";
import Grid from '@mui/material/Grid2';
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BookListPart() {
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
    <Box>
        <Box sx={{mt:"16px", mb:"24px"}}>

        </Box>
        <Grid container spacing={2}>
        {books.map((data) => (
        <Grid size={{ xs: 6, md: 3, lg:3 }}key={data._id}>
          <Card
            sx={{
              boxShadow:
                "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="180"
              src={`${process.env.REACT_APP_SERVER_API}/book/image/${data._id}`}
              sx={{ objectFit: "contain", backgroundColor: "#EBEFF2" }}
            />
            <CardContent>
              <Box sx={{ mb: "16px", display:"flex", gap:2, flexDirection:"column" }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600, height: "40px" }}
                >
                  {data.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#757575" }}
                >
                  SKU:{data.writer}.00
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#757575" }}
                >
                  SKU:{data.quantity}.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box variant="filled">
                  {data.quantity > 19 && (
                    <Typography
                      sx={{
                        backgroundColor: "#DDEDDD",
                        p: "3px",
                        color: "#1B5E20",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Available
                    </Typography>
                  )}
                  {data.quantity < 19 && data.quantity > 1 && (
                    <Typography
                      sx={{
                        backgroundColor: "#FFE0B2",
                        p: "3px",
                        color: "#E65100",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Limited
                    </Typography>
                  )}
                  {data.quanlity === 0 && (
                    <Typography
                      sx={{
                        backgroundColor: "#FFCDD2",
                        p: "3px",
                        color: "#B71C1C",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      quantity out
                    </Typography>
                  )}
                </Box>
                <Typography
                  sx={{ fontSize: "16px", color: "#212B36", fontWeight: 600 }}
                >
                  ৳{data.sellPrice}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
        </Grid>
    </Box>
  )
}
