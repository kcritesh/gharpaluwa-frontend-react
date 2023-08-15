import { Fragment, useEffect } from "react";
import container from "./Products.Container";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductsCard from "./components/ProductsCard";

interface Props {
  fetchUserProducts: () => void;
  products: any;
}

const Products = ({ fetchUserProducts, products: { userProducts } }: Props) => {
  useEffect(() => {
    fetchUserProducts();
  }, []);

  const pageHeadingBox = {
    marginLeft: "8px",
    marginTop: "18px",
  };
  const wrapper = {
    margin: "8px",
    background: "white",
    padding: "18px",
    borderRadius: "8px",
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
        </Typography>
      </Box>
      <Box sx={{ ...wrapper }}>
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
      </Box>
    </>
  );
};

export default container(Products);
