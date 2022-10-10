import { Card, CardContent, CardHeader, CardMedia, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
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

    return (
        <>
            {groupedProducts.map(([bank, products]) => {
                if (bank === "CBA") {
                    return <Card key={bank} className="noTabMargin">
                        <CardHeader title={bank} className="cardHeaderPosition" />
                        <CardMedia
                            component='img'
                            src={`./brands/${bank}.png`}
                            height="300px"
                            sx={{ objectFit: "contain" }}
                        />
                        <ProductSelection productCategorySelected={productCategorySelected} products={products} />
                    </Card>
                }
            })}
        </>

    );
})