import { Avatar, Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar, ThemeProvider } from "@mui/material";
import "./styles.css";
import { theme } from "./theme";

export default function NavBar() {
    return (
            <AppBar position="fixed" color='primary'>
                <Container disableGutters={true} maxWidth={false}>
                    <Toolbar disableGutters={true}>
                        <Avatar variant="square" src="./brands/CBA.png" className="imageSizing"/>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}