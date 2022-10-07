import { AppBar, ThemeProvider } from "@mui/material";
import useStyles from "./styles";
import { theme } from "./theme";

export default function NavBar() {
    const classes = useStyles();
    return (
            <AppBar position="static" color='primary' className={classes.appBarSize}>
                Hello
            </AppBar>
    )
}