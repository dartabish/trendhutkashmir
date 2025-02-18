import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon({ selectedPackage }) {
  const itinerary = selectedPackage.itinerary;

  // State to track the currently expanded accordion
  const [expanded, setExpanded] = useState(null);

  // Handle accordion expansion/collapse
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      {Object.keys(itinerary).map((dayKey) => {
        const day = itinerary[dayKey];
        return (
          <Accordion
            key={dayKey}
            expanded={expanded === dayKey}
            onChange={handleChange(dayKey)}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`${dayKey}-content`}
              id={`${dayKey}-header`}
            >
              <Typography component="span">
                <span className="text-blue-950 font-semibold">{day.day}: </span>
                <span className="">{day.title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-disc px-2 text-justify">
                  {day.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
