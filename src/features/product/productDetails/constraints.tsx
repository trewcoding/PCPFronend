import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Constraint } from "../../../app/models/constraint";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    constraints: Constraint[]
}

export default function Constraints({ constraints }: Props) {

    const grouped = Object.entries(
        constraints.reduce((values, value) => {
                const key = value.constraintType;
                values[key] = values[key] ? [...values[key], value] : [value];
                return values;
            }, {} as { [key: string]: Constraint[] })
        )

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='h5'>Product Constraints</Typography>
                </AccordionSummary>
                {grouped.map(([group, constraints], i) => (
                    <AccordionDetails key={group}>
                        <Typography className="titleCase"><b>{group}</b></Typography>
                        {constraints?.map(constraint => (
                            <Typography key={constraint.constraintId}>
                                {constraint.constraintType === group && constraint.additionalInfo &&
                                    <p>{constraint.additionalInfo}</p>}
                                {constraint.constraintType === group && constraint.additionalValue &&
                                    <p className="marginBottom">Value: {constraint.additionalValue}</p>}
                            </Typography>
                        ))}
                        {grouped.length - 1 !== i &&
                        <Divider /> }
                    </AccordionDetails>
                ))}
            </Accordion>
        </>

    )
}