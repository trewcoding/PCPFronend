import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../app/stores/store";
import ProductCard from "./productCard";
import { StyledEngineProvider } from '@mui/material/styles';
import './productCardStyle.css'

export default function ProductCategorySelection() {
    const [category, setCategory] = useState('');
    const [isShown, setIsShown] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
        setIsShown(true)
    };
    const { productStore } = useStore();
    const { groupedCategories } = productStore;
    console.log("ProductCategorySelection")

    return (
        <StyledEngineProvider injectFirst>
            <Box>
                <Container className="CenterContainerSize MarginProductCategory">
                    <FormControl fullWidth>
                        <InputLabel>Product Categories</InputLabel>
                        <Select
                            value={category}
                            label="ProductCategory"
                            onChange={handleChange}
                        >
                            {groupedCategories.map(([group]) => (
                                <MenuItem key={group} value={group}>{group.replaceAll('_', " ")}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Container>
                {isShown === true &&
                    <Grid container={true} columns={4}>
                        <ProductCard productCategorySelected={category} />
                    </Grid>
                }
            </Box>
        </StyledEngineProvider>

    );
}