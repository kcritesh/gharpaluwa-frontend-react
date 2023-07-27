import { Components, Theme } from "@mui/material";

export default function CheckboxOverrides(theme: Theme): Components {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          width: '16px',
          height: '16px',
          borderRadius: '4px'
        },
        colorSecondary: {
          "&$checked": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  };
}
