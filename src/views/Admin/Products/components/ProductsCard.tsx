import { Box, IconButton, Typography } from "@mui/material";
import styles from "./ProductCard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "src/store/products/products.action";

interface Props {
  id: string;
  img?: string;
  name?: string;
  price?: number;
  description?: string;
}

const ProductsCard = (props: Props) => {
  const { id, img, name, price } = props;
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  return (
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
        <IconButton aria-label="delete-button" onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit-button">
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductsCard;
