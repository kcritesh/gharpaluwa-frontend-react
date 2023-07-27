import { Components, Theme } from "@mui/material";

export default function ButtonOverrides(theme: Theme): Components {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '10px 18px',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          color: '#fff',
        },
      },
    },
  };
}
