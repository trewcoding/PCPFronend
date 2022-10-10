import { Card, CardHeader, CardMedia, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStore } from "../../app/stores/store";
import './productCardStyle.css'
import ProductSelection from "./productSelection";

interface Props {
    productCategorySelected: string
    defaultBank: string
}


export default observer(function ProductCard({ productCategorySelected, defaultBank }: Props) {
    const { productStore } = useStore();
    const { groupedProducts, brandsList } = productStore;
    const [value, setValue] = useState(defaultBank);

    const brandsArray = Array.from(brandsList.values());


    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <>
        <Card className="tabMarginBottom">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                indicatorColor='secondary'
                textColor="secondary"
            >
                {brandsArray.sort().map(brand => {
                    if (brand !== "CBA") {
                        return <Tab label={brand} value={brand} />
                    }
                })}

            </Tabs>
        </Card>
            {groupedProducts.sort().map(([bank, products]) => {
                    if (bank === value) {
                    return <Card key={bank}>
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