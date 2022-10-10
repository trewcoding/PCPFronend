import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { LendingRate } from "../../../app/models/lendingRate";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    lendingRates: LendingRate[]
}

export default function LendingRates({ lendingRates }: Props) {
    const grouped = Object.entries(
        lendingRates.reduce((values, value) => {
            const key = value.lendingRateType;
            values[key] = values[key] ? [...values[key], value] : [value];
            return values;
        }, {} as { [key: string]: LendingRate[] })
    )

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">Product Lending Rates</Typography>
                </AccordionSummary>
                {grouped.sort().map(([group, lendingRates], i) => (
                    <AccordionDetails key={group}>
                        <Typography className="titleCase">{group}</Typography>
                        {lendingRates?.map(lendingRate => (
                            <Box key={lendingRate.lendingRatesId}>
                                {lendingRate.lendingRateType === group && lendingRate.rate &&
                                    <p>Lending Rate: {lendingRate.rate}</p>}
                                {lendingRate.lendingRateType === group && lendingRate.calculationFrequency &&
                                    <p>Calculation Frequency: {lendingRate.calculationFrequency}</p>}
                                {lendingRate.lendingRateType === group && lendingRate.additionalInfo &&
                                    <p className="marginBottom">{lendingRate.additionalInfo}</p>}
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