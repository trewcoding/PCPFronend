import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Eligibility } from "../../../app/models/eligibility";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    eligibility: Eligibility[]
}

export default function Eligibilitys({ eligibility }: Props) {
    const grouped = Object.entries(
        eligibility.reduce((values, value) => {
            const key = value.eligibilityType;
            values[key] = values[key] ? [...values[key], value] : [value];
            return values;
        }, {} as { [key: string]: Eligibility[] })
    )

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">Product Eligibility</Typography>
                </AccordionSummary>
                {grouped.sort().map(([group, eligibility], i) => (
                    <AccordionDetails key={group}>
                        <Typography className="titleCase"><b>{group}</b></Typography>
                        {eligibility?.map(eligibility => (
                            <Box key={eligibility.eligibilityId}>
                                {eligibility.eligibilityType === group && eligibility.additionalInfo &&
                                    <p>{eligibility.additionalInfo}</p>}
                                {eligibility.eligibilityType === group && eligibility.additionalValue &&
                                    <p className="marginBottom">Value: {eligibility.additionalValue}</p>}
                            </Box>
                        ))}
                        {grouped.length - 1 !== i &&
                        <Divider /> }
                    </AccordionDetails>
                ))}
            </Accordion>
        </>
    )
}