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
    MuiSkeleton: {
      root: {
        backgroundColor: 'rgba(200, 200, 200, 0.11) !important',
      },
    },
  },
});

export default theme;