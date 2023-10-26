const AccordionPanel = ({
  children,
  isOpen,
}: {
  children: React.ReactNode
  isOpen: boolean
}) => {
  return (
    <>
        <div className= {` transition-all duration-500 h-0 overflow-hidden ${isOpen ? 'h-[5rem] overflow-y-auto pb-3 scrollbar-thumb-rose-500' : " pb-0"}`} >
            <p className=" text-base">{children}</p>
        </div>
    </>
  )
}

export default AccordionPanel
