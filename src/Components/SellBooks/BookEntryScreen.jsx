import { Box, Button, Stack, TextField } from "@mui/material";

export default function BookEntryScreen({
  handleInputChange,
  formValues,
  activeField,
  handleAddToList,
  renderSuggestions,
}) {
  return (
    <Stack
      gap="24px"
      sx={{
        p: "24px",
        height: "calc(100vh - 60px)",
        borderRight: "1px solid rgba(145, 158, 171, 0.24)",
      }}
    >
      {/* Invoice ID */}
      <TextField
        label="Invoice ID"
        variant="outlined"
        fullWidth
        name="invoiceID"
        value={formValues.invoiceID}
        onChange={handleInputChange}
      />

      {/* Book Code Field */}
      <Box sx={{ position: "relative" }}>
        <TextField
          label="Book Code"
          variant="outlined"
          fullWidth
          name="bookCode"
          value={formValues.bookCode}
          onChange={handleInputChange}
        />
        {activeField === "bookCode" && renderSuggestions()}
      </Box>

      {/* Book Name Field */}
      <Box sx={{ position: "relative" }}>
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          name="bookName"
          value={formValues.bookName}
          onChange={handleInputChange}
        />
        {activeField === "bookName" && renderSuggestions()}
      </Box>

      {/* Other Fields (Automatically Populated and Disabled) */}
      <TextField
        label="Writer Name"
        variant="outlined"
        fullWidth
        name="writerName"
        value={formValues.writerName}
        disabled
      />
      <TextField
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
        value={formValues.category}
        disabled
      />
      <TextField
        label="Publisher"
        variant="outlined"
        fullWidth
        name="publisher"
        value={formValues.publisher}
        disabled
      />
      <TextField
        label="Stock"
        variant="outlined"
        fullWidth
        name="stock"
        value={formValues.stock}
        disabled
      />

      {/* Sell Quantity (User Input) */}
      <TextField
        label="Sell Qty"
        variant="outlined"
        fullWidth
        name="sellQty"
        value={formValues.sellQty}
        onChange={handleInputChange}
        type="number"
        inputProps={{ min: 0, max: formValues.stock }}
      />
      <TextField
        label="Sell Price"
        variant="outlined"
        fullWidth
        name="sellPrice"
        value={formValues.sellPrice}
        disabled
      />

      {/* Spacer to push the button to the bottom */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Button at the bottom */}
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid rgba(145, 158, 171, 0.24)",
          pt: "12px",
        }}
      >
        <Button sx={{ width: "100%" }} onClick={handleAddToList}>
          Add to List
        </Button>
      </Box>
    </Stack>
  );
}
