import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { Feature } from "../../../app/models/feature";
import "./productDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    features: Feature[]
}

export default function Features({ features }: Props) {
    const grouped = Object.entries(
        features.reduce((values, value) => {
            const key = value.featureType;
            values[key] = values[key] ? [...values[key], value] : [value];
            return values;
        }, {} as { [key: string]: Feature[] })
    )

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">Product Features</Typography>
                </AccordionSummary>
                {grouped.sort().map(([group, features], i) => (
                    <AccordionDetails key={group}>
                        <Typography className="titleCase"><b>{group}</b></Typography>
                        {features?.map(feature => (
                            <Box key={feature.featureId} className="marginBottom">
                                {feature.featureType === group && feature.additionalInfo &&
                                    <p>{feature.additionalInfo}</p>}
                                {feature.featureType === group && feature.additionalValue &&
                                    <p>Value: {feature.additionalValue}</p>}
                                {feature.featureType === group && feature.additionalInfoUri &&
                                    <p><a href={feature.additionalInfoUri}>Additional Information</a></p>}
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