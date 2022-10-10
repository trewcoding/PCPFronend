import { Container, StyledEngineProvider, ThemeProvider } from "@mui/material";
import ProductPage from "../../features/product/productPage";
import NavBar from "./NavBar";
import "./styles.css";

import { theme } from "./theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <NavBar />
          <Container maxWidth={false} className="containerSize">
            <ProductPage />
          </Container>
        </StyledEngineProvider>
      </ThemeProvider>
    </>

  );
}

export default App;

