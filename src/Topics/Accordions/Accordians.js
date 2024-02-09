import React, { useState } from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material"

export default function Accordians() {
    const [accordian , setAccordian] = useState("")
  return (
    <>
    <Accordion expanded={accordian==="Test1"} onChange={()=>{setAccordian("Test1")}} >
        <AccordionSummary>
            This is Accordian one
        </AccordionSummary>

        <AccordionDetails>
            This is detail about the Accordian one 
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={accordian==="Test2"} onChange={()=>{setAccordian("Test2")}}>
        <AccordionSummary>
            This is Accordian Two
        </AccordionSummary>

        <AccordionDetails>
            This is detail about the Accordian Two
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={accordian==="Test3"} onChange={()=>{setAccordian("Test3")}}>
        <AccordionSummary>
            This is Accordian Three
        </AccordionSummary>

        <AccordionDetails>
            This is detail about the Accordian Three
        </AccordionDetails>
    </Accordion>
      
    </>
  )
}
