import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../app/stores/store";
import ProductCard from "./productCard";
import { StyledEngineProvider } from '@mui/material/styles';
import './productCardStyle.css'
import ProductCardSelect from "./productCardSelect";

export default function ProductCategorySelection() {
    const [category, setCategory] = useState('');
    const [isShown, setIsShown] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
        setIsShown(true)
    };
    const { productStore } = useStore();
    const { groupedCategories } = productStore;
    console.log(groupedCategories)

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
                        {groupedCategories.map(([group]) => (
                            <MenuItem className="titleCase" key={group} value={group}>{group}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Container>
            {isShown === true &&
                <Grid container={true} columns={4}>
                    <Grid item xs={1}>
                        <ProductCard productCategorySelected={category} />
                    </Grid>
                    <Grid item xs={1}>
                        <ProductCardSelect productCategorySelected={category} defaultBank={'ANZ'}/>
                    </Grid>
                    <Grid item xs={1}>
                        <ProductCardSelect productCategorySelected={category} defaultBank={'NAB'}/>
                    </Grid>
                    <Grid item xs={1}>
                        <ProductCardSelect productCategorySelected={category} defaultBank={'Westpac'}/>
                    </Grid>

                </Grid>
            }
        </Box>
    );
}