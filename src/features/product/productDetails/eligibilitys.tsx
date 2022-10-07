import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Eligibility } from "../../../app/models/eligibility";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    eligibility: Eligibility[]
}

export default function Eligibilitys({ eligibility }: Props) {
    var arrayRetured: Array<string> = [];
    eligibility.forEach(function (eligibility) {
        arrayRetured.push(eligibility.eligibilityType)
    })
    let setReturned = [...new Set(arrayRetured)]

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Eligibility</Typography>
                </AccordionSummary>
                {setReturned.sort().map(group => (
                    <AccordionDetails key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {eligibility?.map(eligibility => (
                            <Box key={eligibility.eligibilityId}>
                                {eligibility.eligibilityType === group && eligibility.additionalInfo &&
                                    <p>{eligibility.additionalInfo}</p>}
                                {eligibility.eligibilityType === group && eligibility.additionalValue &&
                                    <p className="marginBottom">Value: {eligibility.additionalValue}</p>}
                            </Box>
                        ))}

                    </AccordionDetails>
                ))}
            </Accordion>
        </>
    )
}