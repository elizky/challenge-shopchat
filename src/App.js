import { createTheme, ThemeProvider } from '@mui/material';
import { PeliculasContextProvider } from './context/PeliculasContext';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      white: '#EFEFEF'
    },
    primary: {
      main: '#D4ECDD'
    },
    secondary: {
      main: '#345B63'
    },
    info: {
      main: '#152D35'
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <PeliculasContextProvider>
        <Home />
      </PeliculasContextProvider>
    </ThemeProvider>
  );
}

export default App;
