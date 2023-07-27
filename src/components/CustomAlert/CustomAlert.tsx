import * as React from "react";

// Material-ui
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

// Project imports
import container from "./CustomAlert.container";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  position?: any;
  alert?: any;
  onCloseAlert?: () => void;
}

const CustomAlert = ({
  position = { vertical: "bottom", horizontal: "right" },
  alert: { openAlert, severity, message },
  onCloseAlert,
}: Props) => {
  const snackbarBackgroundColor = severity === "success" ? "#1570EF" : undefined;

  return (
    <Snackbar
      anchorOrigin={position}
      open={openAlert}
      autoHideDuration={5000}
      onClose={onCloseAlert}
      style={{ zIndex: 99999, backgroundColor: snackbarBackgroundColor }}
    >
      <Alert onClose={onCloseAlert} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default container(CustomAlert);
