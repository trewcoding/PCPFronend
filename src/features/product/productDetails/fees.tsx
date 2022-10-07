import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Fee } from "../../../app/models/fee";
import Discounts from "./discounts";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    fees: Fee[]
}

export default function Fees({ fees }: Props) {
    var arrayRetured: Array<string> = [];
    fees.forEach(function (fee) {
        arrayRetured.push(fee.feeType)
    })
    let setReturned = [...new Set(arrayRetured)]

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Fees</Typography>
                </AccordionSummary>
                {setReturned.sort().map(group => (
                    <AccordionDetails key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {fees?.map(fee => (
                            <Box key={fee.feeId}>
                                {fee.feeType === group && fee.name &&
                                    <h3>{fee.name}</h3>}
                                {fee.feeType === group && fee.additionalInfo &&
                                    <p>{fee.additionalInfo}</p>}
                                {fee.feeType === group && fee.amount &&
                                    <p >Fee: {fee.amount} {fee.currency}</p>}
                                {fee.feeType === group && fee.transactionRate &&
                                    <p>Fee Transaction Rate: {fee.transactionRate}<br />Currency: {fee.currency}</p>}
                                {fee.feeType === group && fee.discounts?.length !== 0 &&
                                    <Discounts discounts={fee.discounts} />}
                                {fee.feeType === group && fee.additionalValue &&
                                    <p className="marginBottom">Value: {fee.additionalValue}</p>}
                            </Box>
                        ))}
                        <Divider />
                    </AccordionDetails>
                ))}
            </Accordion>
        </>

    )
}