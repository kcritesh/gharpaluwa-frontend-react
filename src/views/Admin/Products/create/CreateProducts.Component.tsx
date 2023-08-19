import { useEffect, useState, useCallback } from "react";
import container from "./CreateProducts.Container";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import Dropzone from "react-dropzone";
import DefaultImage from "src/assets/images/defaultImage.svg";

interface Props {
  onCreateProduct: (formData: any, cb: any) => void;
  onUpdateProduct: (id: string, formData: any, cb: any) => void;
}

const CreateProducts = ({ onCreateProduct, onUpdateProduct }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = id ? true : false;

  const pageHeadingBox = {
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    marginBottom: "18px",
  };
  const wrapper = {
    margin: "8px",
    background: "white",
    padding: "18px",
    borderRadius: "8px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
  };

  const pageTitle = {
    fontWeight: "500",
    color: "black",
  };

  const textField = {
    "& .MuiOutlinedInput-root": {
      height: "48px",
    },
    "& fieldset": {
      borderRadius: "8px",
    },
  };
  // ===========File Uploads================
  const [acceptedFiles, setAcceptedFiles] = useState<any>([]);
  const [rejectedFiles, setRejectedFiles] = useState<any>([]);

  const onDrop = useCallback((acceptedFiles: any, fileRejections: any) => {
    setAcceptedFiles(acceptedFiles);
    setRejectedFiles(fileRejections);
  }, []);
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      <img src={DefaultImage} alt="excel" height={"20px"} width={"20px"} />{" "}
      {file.path} - {file.size / 1000} kb
    </li>
  ));

  const fileRejectionItems = rejectedFiles.map(({ file, errors }) => (
    <li key={file.path} style={{ color: "red" }}>
      {file.path.slice(0, 27)} - {(file.size / (1024 * 1024)).toFixed(3)} MB
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  const typeValidator = (file) => {
    if (file.type.startsWith("image/")) {
      if (file.size > 3 * 1024 * 1024) {
        // 3MB limit
        return {
          code: "size-too-large",
          message: "Image file is larger than 3MB",
        };
      }
    }
    return null;
  };

  return (
    <>
      <Box sx={{ ...wrapper }}>
        <Box sx={{ ...pageHeadingBox }}>
          <Typography variant="h6" sx={{ ...pageTitle }}>
            {isEdit ? "Edit" : "Add New"} Products
          </Typography>
        </Box>
        <Box>
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
              quantity: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
              const { name, description, price, quantity } = values;
              const formData = new FormData();
              formData.append("name", name);
              formData.append("description", description);
              formData.append("price", price);
              // formData.append("quantity", quantity);
              formData.append("img", acceptedFiles[0]);

              // Check if edit or create
              if (isEdit) {
                onUpdateProduct(id, formData, () => {
                  setSubmitting(false);
                  navigate("/manage/products");
                });
              } else if (!isEdit) {
                onCreateProduct(formData, () => {
                  setSubmitting(false);
                  navigate("/manage/products");
                });
              }
            }}
          >
            {() => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: theme.palette.text.primary,
                          marginBottom: "8px",
                        }}
                      >
                        Name*
                      </Typography>
                      <Field
                        name="name"
                        placeholder="Enter Name of Product"
                        fullWidth
                        component={TextField}
                        sx={{
                          ...textField,
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: theme.palette.text.primary,
                          marginBottom: "8px",
                        }}
                      >
                        Price*
                      </Typography>
                      <Field
                        name="price"
                        placeholder="Enter Price of Product"
                        fullWidth
                        component={TextField}
                        sx={{
                          ...textField,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: theme.palette.text.primary,
                          marginBottom: "8px",
                        }}
                      >
                        Quantity*
                      </Typography>
                      <Field
                        name="quantity"
                        placeholder="Enter Quantity of Product"
                        fullWidth
                        component={TextField}
                        sx={{
                          ...textField,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: theme.palette.text.primary,
                          marginBottom: "8px",
                        }}
                      >
                        Upload Image
                      </Typography>
                      <Box>
                        <Dropzone
                          onDrop={onDrop}
                          maxFiles={1}
                          accept={{
                            "image/jpeg": [".jpeg", ".png"],
                          }}
                          validator={typeValidator}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <Box
                              sx={{
                                border: "1.8px dashed rgba(5, 173, 173, 0.5)",
                                borderRadius: "10px",
                                width: "100%",
                                background: "#FFFFFF",
                                textAlign: "center",
                                marginBottom: (theme) => theme.spacing(3),
                                cursor: "pointer",
                                padding: (theme) => theme.spacing(3),
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                              }}
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <img src={DefaultImage} alt="default-image" />
                              <Box>
                                <Typography
                                  variant="h2"
                                  sx={{
                                    fontSize: "18px",
                                  }}
                                >
                                  Select file to import
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontSize: "14px",
                                  }}
                                >
                                  or drag and drop it here
                                </Typography>
                              </Box>
                            </Box>
                          )}
                        </Dropzone>
                        <Box
                          sx={{
                            width: "100%",
                            "& > ul > li": {
                              textDecoration: "none",
                              listStyleType: "none",
                              display: "flex",
                              // flexDirection: "column",
                              alignItems: "center",
                              gap: "6px",
                            },
                          }}
                        >
                          <ul>{acceptedFileItems}</ul>
                          <ul>{fileRejectionItems}</ul>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: theme.palette.text.primary,
                          marginBottom: "8px",
                        }}
                      >
                        Description*
                      </Typography>
                      <Field
                        name="description"
                        placeholder="Enter Description of Product"
                        fullWidth
                        component={TextField}
                        multiline
                        rows={5}
                        sx={{
                          ...textField,
                          "& .MuiOutlinedInput-root": {
                            height: "",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "30px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      sx={{
                        marginRight: "20px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default container(CreateProducts);
