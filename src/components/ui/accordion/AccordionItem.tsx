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
  const handleClick = () => {
    setIsActive(id)
  }

  return (
    <li className=" w-full flex justify-center items-center flex-col last:border-b">
      <AccordionBtn
        handleClick={() => handleClick()}
        isSelected={isSelected}
      >
        {ques}
      </AccordionBtn>
      <AccordionPanel  isSelected={isSelected}>
        {text}
      </AccordionPanel>
    </li>
  )
}

export default AccordionItem
