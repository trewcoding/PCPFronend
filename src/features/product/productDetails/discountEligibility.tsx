import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Eligibility } from "../../../app/models/eligibility";
import "./productDetails.css"

interface Props {
    eligibility: Eligibility[]
}

export default function DiscountEligibility({ eligibility }: Props) {
    var arrayRetured: Array<string> = [];
    eligibility.forEach(function (eligibility) {
        arrayRetured.push(eligibility.discountEligibilityType)
    })
    let setReturned = [...new Set(arrayRetured)]

    console.log(eligibility)

    return (
        <>
            <Box>
                <Typography>Product Eligibility</Typography>
                {setReturned.sort().map(group => (
                    <Box key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {eligibility?.map(eligibility => (
                            <Box key={eligibility.eligibilityId}>
                                {eligibility.discountEligibilityType === group && eligibility.additionalInfo &&
                                    <p>{eligibility.additionalInfo}</p>}
                                {eligibility.discountEligibilityType === group && eligibility.additionalValue &&
                                    <p className="marginBottom">Value: {eligibility.additionalValue}</p>}
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>

        </>
    )
}