import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import styles from "./ProductCard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "src/store/products/products.action";
import DialogComponent from "src/components/DialogComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  img?: string;
  name?: string;
  price?: number;
  description?: string;
}

const ProductsCard = (props: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const { id, img, name, price } = props;
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const theme = useTheme();
  return (
    <>
      <DialogComponent
        open={open}
        handleClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <Box sx={{ padding: "53px 51px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              color: theme.palette.text.secondary,
              marginBottom: "43px",
            }}
          >
            Are you sure you want to delete?
          </Typography>
          <Box
            sx={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
          >
            <Button variant="contained" onClick={() => handleDelete(id)}>
              Confirm
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </DialogComponent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // maxWidth: "250px",
          ":hover": { boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)" },
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            height: "150px",
            overflow: "hidden",
            transition: "transform 0.3s", // Add smooth transition
          }}
        >
          <img src={img} alt={name} className={`${styles.zoomableImage}`} />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Typography>{name}</Typography>
          <Typography>Rs. {price}</Typography>
          {/* <Typography>{description}</Typography> */}
        </Box>
        <Box>
          <IconButton
            aria-label="delete-button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit-button" onClick={()=> navigate(`edit/${id}`)}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ProductsCard;
