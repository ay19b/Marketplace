import { createTheme } from '@mui/material/styles';





// Create a theme instance.
const theme = createTheme({
  overrides:{
    MuiFormControl:{
        width:"80%"
    },
    notchedOutline:{
        borderColor: 'rgba(238, 194, 194, 0.23)!important',
        color: 'aliceblue',
    },
  },
});

export default theme;