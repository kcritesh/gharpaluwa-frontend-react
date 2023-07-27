const PRIMARY = {
  main: "#1570EF", // main color
  dark: "#2461B4", // hover color
  light: "rgba(0, 0, 0, 0.1)", // border color
};
const TEXT = {
    primary: "#6E7079", // text body color
    secondary: "#383E49", // text heading color
    disabled: "#5D6679", // text sub heading color
};
const SECONDARY = {
  light: '#1570EF', //view button color
  main: '#12B76A', //edit button color
  dark: '#F04438', //delete button color
};
const INFO = {
  main: 'rgba(47, 128, 237, 0.1)', // upload image backgroundcolor
  dark: 'rgba(47, 128, 237, 0.79)', //upload image backgroundcolor darker
  light: '#fff' //white color
};
const SUCCESS = {
  main: 'rgba(21, 112, 239, 0.39)' // table head color
}

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  text: TEXT,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
};

export default palette;
