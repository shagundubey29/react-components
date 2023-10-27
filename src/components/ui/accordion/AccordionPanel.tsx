interface panelProp {
  children: React.ReactNode
  isSelected: boolean
}

const AccordionPanel = ({ children, isSelected }: panelProp) => {
  return (
    <>
      <div
        className={` transition-all duration-500  origin-top overflow-hidden 
        ${isSelected ? ' scale-y-100 px-3 pb-3' : 'scale-y-0 pb-0 h-0'} `}
      >
        <p className=" text-base ">{children}</p>
      </div>
    </>
  )
}

export default AccordionPanel
