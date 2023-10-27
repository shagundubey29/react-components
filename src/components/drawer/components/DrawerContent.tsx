const DrawerContent = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div className=" h-full fixed right-0 top-0 bottom-0 w-[25%] bg-white flex flex-col ">
      {children}
    </div>
  )
}

export default DrawerContent
