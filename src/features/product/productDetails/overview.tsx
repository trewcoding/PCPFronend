import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { Data } from "../../../app/models/data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    overview: Data
}

export default function Overview({ overview }: Props) {
    return (
        <>
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Hello</Typography>
                </AccordionDetails>
            </Accordion> */}
        </>
    )
}