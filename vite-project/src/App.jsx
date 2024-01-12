import { useState } from 'react'
import axios from 'axios';

import { Box, ThemeProvider, colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

//Import login page
import LoginPage from './components/LoginPage';
import MuiNavbar from './components/MuiNavbar';

function App() {
  const [count, setCount] = useState(0)

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        console.log(response.data.content);
      }).catch(error => {
        console.log("error")
      })
  }

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#42ecf2',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f24842',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  )
}

export default App
