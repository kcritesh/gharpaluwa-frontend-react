import { Components, Theme } from "@mui/material";

export default function Textfield(theme: Theme): Components {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#D0D5DD",
            borderRadius: "8px",
            width: "100%",
          },
        },
      },
    },
  };
}
