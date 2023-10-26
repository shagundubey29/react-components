import { useState } from 'react'
import AccordionBtn from './AccordionBtn'
import AccordionPanel from './AccordionPanel'

const AccordionItem = ({...item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li className=" w-full flex justify-center items-center flex-col last:border-b">
      <AccordionBtn handleClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {item.ques}
      </AccordionBtn>
      <AccordionPanel isOpen={isOpen}>{item.text}</AccordionPanel>
    </li>
  )
}

export default AccordionItem
