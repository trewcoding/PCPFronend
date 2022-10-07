import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Constraint } from "../../../app/models/constraint";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    constraints: Constraint[]
}

export default function Constraints({ constraints }: Props) {
    var arrayRetured: Array<string> = [];
    constraints.forEach(function (constraints) {
        arrayRetured.push(constraints.constraintType)
    })
    let setReturned = [...new Set(arrayRetured)]

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Constraints</Typography>
                </AccordionSummary>
                {setReturned.sort().map(group => (
                    <AccordionDetails key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {constraints?.map(constraint => (
                            <Box key={constraint.constraintId}>
                                {constraint.constraintType === group && constraint.additionalInfo &&
                                    <p>{constraint.additionalInfo}</p>}
                                {constraint.constraintType === group && constraint.additionalValue &&
                                    <p className="marginBottom">Value: {constraint.additionalValue}</p>}
                            </Box>
                        ))}
                        <Divider />
                    </AccordionDetails>
                ))}
            </Accordion>
        </>

    )
}