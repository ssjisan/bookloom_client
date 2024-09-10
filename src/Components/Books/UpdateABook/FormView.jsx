import { Autocomplete, Stack, TextField } from "@mui/material";
import { ArrowDown } from "../../../assets/IconSet";
import PropTypes from "prop-types";

export default function FormView({
  allCategories,
  allPublishers,
  name,
  setName,
  writer,
  setWriter,
  purchasePrice,
  setPurchasePrice,
  quantity,
  setQuantity,
  sellPrice,
  setSellPrice,
  category,
  setCategory,
  publisher,
  setPublisher,
  
}) {
  console.log("cat",category);
  console.log(publisher);
  return (
    <Stack spacing={2}>
      <TextField
        label="Book Name"
        variant="outlined"
        fullWidth
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Autocomplete
        disablePortal
        options={allCategories}
        getOptionLabel={(option) => option.name || ""}
        popupIcon={<ArrowDown size={20} color="#637381" />}
        renderInput={(params) => (
          <TextField {...params} label="Book Category" fullWidth />
        )}
        value={allCategories.find((cat) => cat._id === category) || null}
        onChange={(e, newValue) => {
          setCategory(newValue ? newValue._id : ""); // Set the selected category ID
        }}
      />
      <TextField
        label="Writer"
        variant="outlined"
        fullWidth
        name="writer"
        value={writer}
        onChange={(e) => setWriter(e.target.value)}
      />
      <Autocomplete
        disablePortal
        options={allPublishers}
        getOptionLabel={(option) => option.name || ""}
        popupIcon={<ArrowDown size={20} color="#637381" />}
        renderInput={(params) => (
          <TextField {...params} label="Publisher" fullWidth />
        )}
        value={allPublishers.find((pub) => pub._id === publisher) || null}
        onChange={(e, newValue) => {
          setPublisher(newValue ? newValue._id : ""); // Set the selected publisher ID
        }}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        fullWidth
        name="quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <TextField
        label="Purchase Price"
        variant="outlined"
        fullWidth
        name="purchasePrice"
        type="number"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
      />
      <TextField
        label="Sell Price"
        variant="outlined"
        fullWidth
        name="sellPrice"
        type="number"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />
    </Stack>
  );
}

FormView.propTypes = {
  allCategories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  allPublishers: PropTypes.array.isRequired,
  setAllPublishers: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  writer: PropTypes.string.isRequired,
  setWriter: PropTypes.func.isRequired,
  purchasePrice: PropTypes.number.isRequired,
  setPurchasePrice: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  sellPrice: PropTypes.number.isRequired,
  setSellPrice: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  publisher: PropTypes.string.isRequired,
  setPublisher: PropTypes.func.isRequired,
};
