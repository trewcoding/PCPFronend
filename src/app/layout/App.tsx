import { Container, StyledEngineProvider, ThemeProvider } from "@mui/material";
import ProductCategorySelection from "../../features/product/productCategorySelection";
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
            <ProductCategorySelection />
          </Container>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
