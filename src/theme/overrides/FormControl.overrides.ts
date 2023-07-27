import { Components, Theme } from "@mui/material";

export default function Textfield(theme: Theme): Components {
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#D0D5DD",
            borderRadius: "8px",
          },
        },
      },
    },
  };
}
