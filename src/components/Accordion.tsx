import { useState } from 'react';
import AccordionArea from './ui/accordion/AccordionArea'
import AccordionBtn from './ui/accordion/AccordionBtn'
import AccordionItem from './ui/accordion/AccordionItem'
import AccordionPanel from './ui/accordion/AccordionPanel'
import { data } from '../utils/accordionData'

const Accordion = () : JSX.Element => {
  // const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <AccordionArea>
      {data.map((item, i): JSX.Element => {
        return (
          <AccordionItem key={i} {...item} />
        )
      })}
    </AccordionArea>
  )
}

export default Accordion
