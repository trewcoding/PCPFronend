import { Box, Typography } from "@mui/material";
import { Discount } from "../../../app/models/discount";
import DiscountEligibility from "./discountEligibility";
import "./productDetails.css"

interface Props {
    discounts: Discount[]
}

export default function Discounts({ discounts }: Props) {

    const grouped = Object.entries(
            discounts.reduce((values, value) => {
                const key = value.discountType;
                values[key] = values[key] ? [...values[key], value] : [value];
                return values;
            }, {} as { [key: string]: Discount[] })
        )

    return (
        <>
            <Box>
                {grouped.sort().map(([group, discounts]) => (
                    <Box key={group}>
                        <Typography className="titleCase"><u>Discount: {group}</u></Typography>
                        {discounts?.map(discount => (
                            <Box key={discount.discountId} className="marginBottom">
                                {discount.discountType === group && discount.description &&
                                    <p>{discount.description}</p>}
                                {discount.discountType === group && discount.amount &&
                                    <p>Discount Value: {discount.amount}</p>}
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