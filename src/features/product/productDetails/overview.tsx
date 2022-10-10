import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { Data } from "../../../app/models/data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./productDetails.css"

interface Props {
    overview: Data
}

export default function Overview({ overview }: Props) {
    return (
        <>
            <Accordion className="AccordianMarginTop">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">Product Overview</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {overview.brandName &&
                        <p><b>Brand Name:</b><br/>{overview.brandName}</p>}
                        <p><b>Product Description:</b><br />{overview.description}</p>
                        {overview.isTailored === true &&
                            <p><b>Tailored Product:</b><br />Yes</p> ||
                            <p><b>Tailored Product:</b><br />No</p>
                        }
                        <p><b>Additional Information<br/></b></p>
                        {overview.additionalInformation.overviewUri &&
                            <p className="marginBottom"><a href={overview.additionalInformation.overviewUri} target="_blank">Overview Information</a></p>}
                        {overview.additionalInformation.eligibilityUri &&
                            <p className="marginBottom"><a href={overview.additionalInformation.eligibilityUri} target="_blank">Eligibility Information</a></p>}
                        {overview.additionalInformation.feesAndPricingUri &&
                            <p className="marginBottom"><a href={overview.additionalInformation.feesAndPricingUri} target="_blank">Fees and Pricing Information</a></p>}
                        {overview.additionalInformation.termsUri &&
                            <p className="marginBottom"><a href={overview.additionalInformation.termsUri} target="_blank">Terms Information</a></p>}


                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}