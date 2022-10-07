import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Feature } from "../../../app/models/feature";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    features: Feature[]
}

export default function Features({ features }: Props) {
    var arrayRetured: Array<string> = [];
    features.forEach(function (feature) {
        arrayRetured.push(feature.featureType)
    })
    let setReturned = [...new Set(arrayRetured)]

    return (
        <>
            <Accordion key={"feature"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Features</Typography>
                </AccordionSummary>
                {setReturned.sort().map(group => (
                    <AccordionDetails key={group}>
                        <Typography>{group.replaceAll('_', " ")}</Typography>
                        {features?.map(feature => (
                            <Box key={feature.featureId}>
                                {feature.featureType === group && feature.additionalInfo &&
                                    <p key={feature.featureId+"1"}>{feature.additionalInfo}</p>}
                                {feature.featureType === group && feature.additionalValue &&
                                    <p key={feature.featureId+"2"}>Value: {feature.additionalValue}</p>}
                                {feature.featureType === group && feature.additionalInfoUri &&
                                    <p key={feature.featureId+"3"} className="marginBottom"><a href={feature.additionalInfoUri}>Additional Information</a></p>}
                            </Box>
                        ))}
                        <Divider />
                    </AccordionDetails>
                ))}
            </Accordion>
        </>

    )
}