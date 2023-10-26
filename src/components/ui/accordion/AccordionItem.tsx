import { useState } from 'react'
import AccordionBtn from './AccordionBtn'
import AccordionPanel from './AccordionPanel'

interface itemProp {
  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  isSelected: boolean,
  id: number,
  ques: string,
  text: string
}

const AccordionItem = ({
  setIsActive,
  isSelected,
  id,
  ques,
  text
}: itemProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    console.log(id)
    setIsOpen(!isOpen)
    setIsActive(id)
  }

  return (
    <li className=" w-full flex justify-center items-center flex-col last:border-b">
      <AccordionBtn
        handleClick={() => handleClick()}
        isOpen={isOpen}
        isSelected={isSelected}
      >
        {ques}
      </AccordionBtn>
      <AccordionPanel isOpen={isOpen} isSelected={isSelected}>
        {text}
      </AccordionPanel>
    </li>
  )
}

export default AccordionItem
