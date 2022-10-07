import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { LendingRate } from "../../../app/models/lendingRate";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    lendingRates: LendingRate[]
}

export default function LendingRates({ lendingRates }: Props) {
    var arrayRetured: Array<string> = [];
    lendingRates.forEach(function (lendingRate) {
        arrayRetured.push(lendingRate.lendingRateType)
    })
    let setReturned = [...new Set(arrayRetured)]

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Lending Rates</Typography>
                </AccordionSummary>
                {setReturned.sort().map(group => (
                    <AccordionDetails key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {lendingRates?.map(lendingRate => (
                            <Box key={lendingRate.lendingRatesId}>
                                {lendingRate.lendingRateType === group && lendingRate.rate &&
                                    <h3>Lending Rate: {lendingRate.rate}</h3>}
                                {lendingRate.lendingRateType === group && lendingRate.calculationFrequency &&
                                    <p>Calculation Frequency: {lendingRate.calculationFrequency}</p>}
                                {lendingRate.lendingRateType === group && lendingRate.additionalInfo &&
                                    <p className="marginBottom">{lendingRate.additionalInfo}</p>}
                            </Box>
                        ))}
                        <Divider />
                    </AccordionDetails>
                ))}
            </Accordion>
        </>

    )
}