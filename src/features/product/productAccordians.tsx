import { Box } from "@mui/material";
import './productCardStyle.css'
import { Data } from "../../app/models/data";
import Features from "./productDetails/features";
import Constraints from "./productDetails/constraints";
import Eligibilitys from "./productDetails/eligibilitys";
import Fees from "./productDetails/fees";
import LendingRates from "./productDetails/lendingRates";
import Overview from "./productDetails/overview";
import agent from "../../app/api/agent";
import { useState, useEffect } from "react";

interface Props {
    selectedProduct: string

}

export default function ProductAccordians({ selectedProduct }: Props) {
    const [productDetails, setProductDetails] = useState<Data | undefined>()
    

    useEffect(() => {
        async function getProductDetails() {
            try {
                const response = await agent.ProductInformation.getProductDetails(selectedProduct);
                setProductDetails(response);
                
            } catch (error) {
                console.log(error)
            }
        }
        getProductDetails();
    }, [selectedProduct]);

    return (
        <>
        { productDetails !== undefined &&
         <Box>
                <Overview overview={productDetails}/>
                {productDetails.features.length > 0 &&
                <Features features={productDetails.features}/>}
                {productDetails.constraints.length > 0 &&
                <Constraints constraints={productDetails.constraints}/>}
                {productDetails.eligibility.length > 0 &&
                <Eligibilitys eligibility={productDetails.eligibility}/>}
                {productDetails.fees.length > 0 &&
                <Fees fees={productDetails.fees}/>}
                {productDetails.lendingRates.length > 0 &&
                <LendingRates lendingRates={productDetails.lendingRates}/>}
            </Box>   
        }
            
        </>
    );
}