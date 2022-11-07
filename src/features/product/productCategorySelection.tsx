import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import "./productCardStyle.css";
import ProductCardSelect from "./productCardSelect";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ProductCategorySelection() {
  const { productStore } = useStore();
  const { loadAllProducts, productRegistry } = productStore;
  const [category, setCategory] = useState("");
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (productRegistry.size <= 1) loadAllProducts();
  }, [productRegistry.size, loadAllProducts]);
  const { groupedCategories } = productStore;

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    setIsShown(true);
  };
  console.log(groupedCategories);

  return (
    <Box>
      <Container className="CenterContainerSize MarginProductCategory">
        <FormControl fullWidth>
          <InputLabel>Product Categories</InputLabel>
          <Select
            value={category}
            label="ProductCategory"
            onChange={handleChange}
            className="titleCase"
          >
            {groupedCategories !== undefined &&
              groupedCategories.map(([group]) => (
                <MenuItem className="titleCase" key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Container>
      {isShown === true && (
        <Grid container={true} columns={4}>
          <Grid item xs={1}>
            <ProductCard productCategorySelected={category} />
          </Grid>
          <Grid item xs={1}>
            <ProductCardSelect
              productCategorySelected={category}
              defaultBank={"ANZ"}
            />
          </Grid>
          <Grid item xs={1}>
            <ProductCardSelect
              productCategorySelected={category}
              defaultBank={"NAB"}
            />
          </Grid>
          <Grid item xs={1}>
            <ProductCardSelect
              productCategorySelected={category}
              defaultBank={"Westpac"}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
});
