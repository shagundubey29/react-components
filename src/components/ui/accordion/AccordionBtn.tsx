import { BiChevronUp } from 'react-icons/bi'
interface BtnProps {
  children: React.ReactNode
  handleClick: () => void
  isSelected: boolean
}

const AccordionBtn = ({ children, handleClick, isSelected }: BtnProps) => {
  return (
    <button
      className=" w-full flex flex-row justify-between items-center border-t  hover:bg-slate-200 p-3"
      onClick={handleClick}
    >
      <h4 className=" text-lg font-semibold capitalize text-gray-600">
        {children}
      </h4>
      <BiChevronUp
        className={` transition-all duration-500 text-red ${
          isSelected ? '' : '-rotate-180'
        }
        `}
      />
    </button>
  )
}

export default AccordionBtn
