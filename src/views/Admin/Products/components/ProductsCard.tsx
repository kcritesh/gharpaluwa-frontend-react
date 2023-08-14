import { Box, Typography } from "@mui/material";
import styles from "./ProductCard.module.css";

interface Props {
  img?: string;
  name?: string;
  price?: number;
  description?: string;
}

const ProductsCard = (props: Props) => {
  const { img, name, price, description } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "250px",
        ":hover": { boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)" },
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: "200px",
          overflow: "hidden",
          transition: "transform 0.3s", // Add smooth transition
        }}
      >
        <img src={img} alt={name} className={`${styles.zoomableImage}`} />
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Typography>{name}</Typography>
        <Typography>Rs. {price}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ProductsCard;
