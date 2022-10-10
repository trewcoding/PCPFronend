import { Typography } from '@mui/material';
import { green, purple, red } from '@mui/material/colors';
import { createStyles, createTheme, useColorScheme } from '@mui/material/styles'
import createPalette from '@mui/material/styles/createPalette';
import { width } from '@mui/system';




export const theme = createTheme({
  palette: createPalette({
    primary: {
      main: '#FFFFFF',
      contrastText: '#1E1E1E'
    }
    ,
    secondary: {
      //main: '#F4F4F4'
      main: '#FFCC00'
      
    },
  }),
  typography: {
    fontFamily: 'sans-serif'
  }
});
