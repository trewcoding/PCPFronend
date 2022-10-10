import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Fee } from "../../../app/models/fee";
import Discounts from "./discounts";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    fees: Fee[]
}

export default function Fees({ fees }: Props) {
    const grouped = Object.entries(
        fees.reduce((values, value) => {
            const key = value.feeType;
            values[key] = values[key] ? [...values[key], value] : [value];
            return values;
        }, {} as { [key: string]: Fee[] })
    )
    console.log(grouped)

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">Product Fees</Typography>
                </AccordionSummary>
                {grouped.sort().map(([group, fees], i) => (
                    <AccordionDetails key={group}>
                        <Typography className="titleCase marginBottom"><b>{group}</b></Typography>
                        {fees?.map(fee => (
                            <Box key={fee.feeId} className="marginBottom">
                                {fee.feeType === group && fee.name &&
                                    <b>{fee.name}</b>}
                                {fee.feeType === group && fee.additionalInfo &&
                                    <p>{fee.additionalInfo}</p>}
                                {fee.feeType === group && fee.amount &&
                                    <p >Fee: {fee.amount} {fee.currency}</p>}
                                {fee.feeType === group && fee.transactionRate &&
                                    <p>Fee Transaction Rate: {fee.transactionRate}<br />Currency: {fee.currency}</p>}
                                {fee.feeType === group && fee.discounts?.length !== 0 &&
                                    <Discounts discounts={fee.discounts} />}
                                {fee.feeType === group && fee.additionalValue &&
                                    <p>Value: {fee.additionalValue}</p>}
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