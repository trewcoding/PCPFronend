import { Card, CardContent, CardHeader, CardMedia, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Fragment, useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../app/stores/store";
import './productCardStyle.css'
import ProductSelection from "./productSelection";
//import ProductCardDropdown from "./ProductCardDropdown";

interface Props {
    productCategorySelected: string
}

export default observer(function ProductCard({ productCategorySelected }: Props) {
    const { productStore } = useStore();
    const { groupedProducts } = productStore;
    console.log("ProductCard")

    return (
        <>
            {groupedProducts.map(([bank, products]) => (
                <Fragment key={bank}>
                    <Grid item xs={1}>
                        <Card>
                            <CardHeader title={bank} className="cardHeaderPosition"/>
                            <CardMedia
                                component='img'
                                src={`./brands/${bank}.png`} 
                                height="250"
                                />
                            <ProductSelection productCategorySelected={productCategorySelected} products={products} />
                        </Card>
                    </Grid>
                </Fragment>

            ))}
        </>

    );
})