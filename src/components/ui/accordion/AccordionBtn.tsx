import {
  // BiChevronDown,
  BiChevronUp,
} from 'react-icons/bi'

interface BtnProps {
  children: React.ReactNode
  handleClick: () => void
  isOpen: boolean
}

const AccordionBtn = ({ children, handleClick, isOpen }: BtnProps) => {
  return (
    <button
      className=" w-full flex flex-row justify-between items-center border-t pt-3 mb-3"
      onClick={handleClick}
    >
      <h4 className=" text-lg font-semibold capitalize text-gray-600">
        {children}
      </h4>
      <BiChevronUp
        className={` transition-all duration-500 text-red ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
      {/* {isOpen ? <BiChevronUp /> : <BiChevronDown />} */}
    </button>
  )
}

export default AccordionBtn
