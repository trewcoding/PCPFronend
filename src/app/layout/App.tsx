import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import ProductCategorySelection from "../../features/product/productCategorySelection";
import ProductPage from "../../features/product/productPage";
import NavBar from "./NavBar";

import { theme } from "./theme";


function App() {
  console.log("App")
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth={false}>
          <ProductPage />
        </Container>
      </ThemeProvider>
    </>

  );
}

export default App;

