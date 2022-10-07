import { CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import './productCardStyle.css'
import { Products } from "../../app/models/products";
import { Data } from "../../app/models/data";
import agent from "../../app/api/agent";
import "./productCardStyle.css"
import { observer } from "mobx-react-lite";
import ProductAccordians from "./productAccordians";

interface Props {
    productCategorySelected: string
    products: Products[]
}

export default function ProductSelection({ productCategorySelected, products }: Props) {
    const [selectedProduct, setSelectedProduct] = useState('')
    const [isSet, setIsSet] = useState(false);
        

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedProduct(event.target.value as string);
        setIsSet(true);
    };

    return (
        <>
            <CardContent>
                <FormControl fullWidth>
                    <InputLabel>Products</InputLabel>
                    <Select
                        value={selectedProduct}
                        label="Products"
                        onChange={handleChange}
                    >
                        {products.filter(products => products.productCategory === productCategorySelected).map(product => (
                            <MenuItem key={product.productId} value={product.productId}>{product.name.replaceAll('_', " ")}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                { isSet === true &&
                    <ProductAccordians selectedProduct={selectedProduct}/>
                }
            </CardContent>
        </>

    );
}