const DrawerContent = ({
  children,
  isOpen
}: {
  children: React.ReactNode
  isOpen: boolean
}): JSX.Element => {
  return (
    <div
      className={`h-full fixed right-0 top-0 bottom-0 w-[25%] bg-white flex flex-col transition-all duration-500 origin-right 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
    >
      {children}
    </div>
  )
}

export default DrawerContent
