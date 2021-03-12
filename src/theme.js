import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#778299',
            main: '#556380',
            dark: '#282c34',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4398af',
            main: '#61DAFB',
            dark: '#80e1fb',
            contrastText: '#000',
        },
    },
})
export default theme