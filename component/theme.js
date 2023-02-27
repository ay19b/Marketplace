import { createTheme } from '@mui/material/styles';



export const theme = createTheme({
    overrides:{
      MuiTextField:{
        root:{
         margin: '15px 0px',
      }
    },
      MuiMenu:{
        list:{
        backgroundColor: '#171717',
        color: 'white',
       }
      },
      MuiInputLabel:{
        root:{
        color: 'white',
        }
      },
      MuiOutlinedInput:{
        notchedOutline:{
        borderColor: 'rgba(255, 255, 255, 0.23)',
      }
      },
      Mui:{
        focused:{
        borderColor: 'rgba(151, 61, 61, 0.23)',
       }
      },
      MuiOutlinedInput:{
        root:{
        color: 'white !important',
       }
      },
      MuiSelect:{
        icon:{
        color: 'white',
       }
      },
    }
  });