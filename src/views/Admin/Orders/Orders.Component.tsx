/* eslint-disable */
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  IconButton,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import MuiTableRow from "@mui/material/TableRow";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { Link } from "react-router-dom";
import container from "./Orders.Container";

import DialogComponent from "src/components/DialogComponent";

import DropDown from "src/assets/images/dropdown.svg";

interface Column {
  id: "SN" | "id" | "date" | "noProducts" | "totAmount" | "action";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "SN", label: "S.No", minWidth: 70 },
  { id: "id", label: "Order Id", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 150 },
  { id: "noProducts", label: "No. of Products", minWidth: 100 },
  { id: "totAmount", label: "Total Amount", minWidth: 100 },
  {
    id: "action",
    label: "Action",
    minWidth: 150,
    align: "center",
  },
];

interface Data {
  id: number;
  date: string;
  noProducts: number;
  totAmount: string;
}

function createData(
  id: number,
  date: string,
  noProducts: number,
  totAmount: string
): Data {
  const isoDate = new Date(date);
  const userFriendlyDate = new Date(isoDate).toLocaleString();

  return {
    id,
    date: userFriendlyDate,
    noProducts,
    totAmount,
  };
}
interface Props {
  orders: any;
  onGetOrdersVendors: () => void;
}
function Orders({ orders: { vendorOrders }, onGetOrdersVendors }: Props) {
  useEffect(() => {
    onGetOrdersVendors();
  }, []);
  const theme = useTheme();

  const root = {
    padding: "41px 31px",
  };
  const wrapper = {
    width: "100%",
    minHeight: "697px",
    background: "#fff",
    borderRadius: "12px",
    padding: "22px 21px",
    marginTop: "26px",
  };
  const button = {
    height: "40px",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  };

  const TableRow = styled(MuiTableRow)`
    && {
      height: 52px;
      td {
        border-bottom: none;
      }
      &:nth-last-of-type(1) td,
      &:nth-last-of-type(1) td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      &:first-of-type th {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  `;
  const TableCell = styled(MuiTableCell)`
    && {
      padding: 0px 0px 0px 22px;
    }
  `;

  // const rows = [
  //   createData("1", 1, "01/01/2021", "John Doe", "2", "2000", "File"),

  // ];

  const rows = vendorOrders
    ? vendorOrders.map((item) =>
        createData(
          item?.orderId,
          item?.createdAt,
          item?.products.length,
          item?.totalPrice
        )
      )
    : [];

  const showTablePagination = rows.length > 10;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterClick = () => {
    // Handle filter button click logic
  };

  const [open, setOpen] = React.useState(false);
  const [billsId, setBillsId] = React.useState(0);
  const handleClickOpen = (id) => {
    setBillsId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ ...root }}>
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
              Products
            </Typography>
            {/* <NoOfBills id={billsId} /> */}
          </Box>
        </DialogComponent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "24px",
              color: theme.palette.text.secondary,
            }}
          >
            Orders
          </Typography>
          {/* <Box sx={{ width: "130px", height: "40px" }}>
            <Link to={"/manage/bank-deposit/create"}>
              <Button variant="contained" sx={{ ...button }} fullWidth>
                <AddIcon sx={{ marginRight: "12px" }} />
                Add New
              </Button>
            </Link>
          </Box> */}
        </Box>

        <Box sx={{ ...wrapper }}>
          <TableContainer sx={{ maxHeight: "697px" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                      {/* {column.id !== "action" && column.id !== "sno" && (
                        <IconButton size="small" onClick={handleFilterClick}>
                          <FilterListRoundedIcon />
                        </IconButton>
                      )} */}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody sx={{ maxHeight: "52px" }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        if (column.id === "action" || column.id === "SN") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "SN" ? (
                                index + 1 + page * rowsPerPage
                              ) : (
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: "13px",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Link to={`/manage/orders/${row.id}`}>
                                    <Button variant="contained">
                                      View Order
                                    </Button>
                                  </Link>
                                </Box>
                              )}
                            </TableCell>
                          );
                        } else {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {showTablePagination && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default container(Orders);
