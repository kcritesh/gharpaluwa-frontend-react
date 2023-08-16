import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
const DialogWrapper = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    borderRadius: "8px",
  },
}));
export interface DialogWrapperTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function CustomizedDialogs({
  open,
  handleClose,
  children,
  maxWidth,
  fullWidth = true,
  sx,
}: any) {
  return (
    <div>
      <DialogWrapper
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        sx={sx}
      >
        <DialogContent>{children}</DialogContent>
      </DialogWrapper>
    </div>
  );
}
