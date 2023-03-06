import { createTheme } from '@mui/material/styles';





// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiFormLabel:{
        root:{
          color: 'rgba(255, 255, 255, 0.6) !important',
        }
    }
  }
});

export default theme;