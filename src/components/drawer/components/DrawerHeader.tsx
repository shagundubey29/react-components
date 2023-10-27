import { AiOutlineCloseCircle } from 'react-icons/ai'

const DrawerHeader = ({
  children,
  setIsOpen,
}: {
  children: React.ReactNode
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
  return (
    <div className=" w-full flex justify-between items-center p-4 border-b border-gray-200">
      <h3 className=" text-2xl font-semibold text-slate-700">{children}</h3>
      <button className=" flex justify-center items-center" onClick={() => setIsOpen(false)}>
        <AiOutlineCloseCircle className=" text-3xl" color="black" />
      </button>
    </div>
  )
}

export default DrawerHeader
