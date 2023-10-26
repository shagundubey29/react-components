import { useState } from 'react';
import AccordionArea from './ui/accordion/AccordionArea'
import AccordionItem from './ui/accordion/AccordionItem'
import { data } from '../utils/accordionData'

const Accordion = () : JSX.Element => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <AccordionArea>
      {data.map((item): JSX.Element => {
        return (
          <AccordionItem key={item.id} {...item} isSelected = {item.id ===  isActive} setIsActive={setIsActive} />
        )
      })}
    </AccordionArea>
  )
}

export default Accordion
