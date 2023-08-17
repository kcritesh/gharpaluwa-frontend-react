import { Fragment, useEffect } from "react";
import container from "./Products.Container";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import ProductsCard from "./components/ProductsCard";
import RefreshIcon from "@mui/icons-material/Refresh";

interface Props {
  fetchUserProducts: () => void;
  products: any;
}

const Products = ({
  fetchUserProducts,
  products: { userProducts, loading },
}: Props) => {
  useEffect(() => {
    fetchUserProducts();
  }, []);

  const pageHeadingBox = {
    marginTop: "18px",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    paddingX: "18px",
  };
  const wrapper = {
    margin: "8px",
    background: "white",
    padding: "18px",
    borderRadius: "8px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const pageTitle = {
    fontWeight: "500",
    color: "black",
  };

  const productsContainer = {
    mt: "14px",
  };
  return (
    <>
      <Box sx={{ ...pageHeadingBox }}>
        <Typography variant="h4" sx={{ ...pageTitle }}>
          Products
          <IconButton onClick={() => fetchUserProducts()}>
            <RefreshIcon />
          </IconButton>
        </Typography>
        <Box>
          <Button variant="contained" color="primary">
            Add Product
          </Button>
        </Box>
      </Box>
      <Box sx={{ ...wrapper }}>
        {loading ? (
          <Box sx={{ width: "50%", margin: "auto" }}>
            <LinearProgress />
          </Box>
        ) : (
          <Box sx={{ ...productsContainer }}>
            <Grid container spacing={5}>
              {userProducts?.products
                ? userProducts?.products?.map((product: any) => (
                    <Fragment key={product?._id}>
                      <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ProductsCard
                          id={product._id}
                          name={product.name}
                          description={product.description}
                          price={product.price}
                          img={product.imgUrl}
                        />
                      </Grid>
                    </Fragment>
                  ))
                : "No Products! Please add some products"}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default container(Products);
