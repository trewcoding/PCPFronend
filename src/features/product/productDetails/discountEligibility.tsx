import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Eligibility } from "../../../app/models/eligibility";
import "./productDetails.css"

interface Props {
    eligibility: Eligibility[]
}

export default function DiscountEligibility({ eligibility }: Props) {
    const grouped = Object.entries(
        eligibility.reduce((values, value) => {
            const key = value.discountEligibilityType;
            values[key] = values[key] ? [...values[key], value] : [value];
            return values;
        }, {} as { [key: string]: Eligibility[] })
    )

    return (
        <>
            <Box>
                {grouped.sort().map(([group, eligibility]) => (
                    <Box key={group}>
                        <Typography className="titleCase"><u>Discount Eligibility: {group}</u></Typography>
                        {eligibility?.map(eligibility => (
                            <Box key={eligibility.eligibilityId}>
                                {eligibility.discountEligibilityType === group && eligibility.additionalInfo &&
                                    <p>Eligibility: {eligibility.additionalInfo}</p>}
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