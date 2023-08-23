import {
  Box,
  LinearProgress,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import formatNepaliNumber from "src/utils/numeralformat";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import MuiTableRow from "@mui/material/TableRow";
import { create } from "@mui/material/styles/createTransitions";
import { useDispatch, useSelector } from "react-redux";
import { getJvBankDepositStart as getBills } from "src/store/bank/bank.actions";

interface Column {
  id: "SN" | "billNo" | "amount";
  label: string;
  minWidth?: number;
  align?: "center" | "right" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "SN", label: "S.No", minWidth: 70 },
  { id: "billNo", label: "Bill No", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100, align: "right" },
];

interface Data {
  billNo: string;
  amount: number;
}

function createData(billNo: string, amount: number): Data {
  return {
    billNo,
    amount,
  };
}

interface Props {
  id: number;
}

const NoOfProducts = ({ id }: Props) => {
  const theme = useTheme();
  const bank = useSelector((state: any) => state.bank);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBills(id));
  }, [dispatch, id]);
  const {
    loading,
    JV: { items: bills },
  } = bank;
  const root = {
    padding: "41px 31px",
  };
  const wrapper = {
    width: "100%",
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

  const rows =
    bills && bills.length
      ? bills.map((item) => createData(item.sales_bill_no, item.total_amount))
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

  return (
    <Box sx={{ ...wrapper }}>
      {loading ? (
        <LinearProgress />
      ) : (
        <Box>
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
                        if (column.id === "SN") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {index + 1 + page * rowsPerPage}
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

          <Box sx={{ display: "flex ", justifyContent: "flex-end" }}>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Total :{" "}
              {bills && bills.length > 0
                ? formatNepaliNumber(
                    bills.reduce((accumulator, currentItem) => {
                      const totalAmount = parseFloat(currentItem.total_amount);
                      if (!isNaN(totalAmount)) {
                        return accumulator + totalAmount;
                      } else {
                        return accumulator;
                      }
                    }, 0)
                  )
                : 0}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NoOfProducts;
