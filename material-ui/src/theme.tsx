import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#9835ff',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
