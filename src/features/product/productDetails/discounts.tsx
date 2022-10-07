import { Box, Typography } from "@mui/material";
import { Discount } from "../../../app/models/discount";
import DiscountEligibility from "./discountEligibility";
import "./productDetails.css"

interface Props {
    discounts: Discount[]
}

export default function Discounts({ discounts }: Props) {
    var arrayRetured: Array<string> = [];
    discounts.forEach(function (discount) {
        arrayRetured.push(discount.discountType)
    })
    let setReturned = [...new Set(arrayRetured)]

        return (
            <>
            <Box>
                <h1>Product Discounts</h1>
                {setReturned.sort().map(group => (
                    <Box key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {discounts?.map(discount => (
                            <Box key={discount.discountId}>
                                {discount.discountType === group && discount.description &&
                                    <p>{discount.description}</p>}
                                {discount.discountType === group && discount.amount &&
                                    <p className="marginBottom">Discount Value: {discount.amount}</p>}
                                {discount.eligibility?.length !== 0 && discount.discountType === group &&
                                     <DiscountEligibility eligibility={discount.eligibility} />}
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
            </>
        )
}