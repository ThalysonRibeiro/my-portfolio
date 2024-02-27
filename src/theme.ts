import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            // main: '#232323',
            // main: '#150023'
            main: '#0D0115'

        },
        secondary: {
            main: '#8000FF',
        },
    },
    typography: {
        fontFamily: "Segoe UI"
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // '"Helvetica Neue"',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
    }
});

theme = responsiveFontSizes(theme);

export default theme;