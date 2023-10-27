
const DrawerFooter = ({children} : {children : React.ReactNode}) => {
  return (
    <div className=" absolute bottom-0 w-full p-4 border-t border-gray-200 flex gap-4 left-0 justify-end">
      {children}
    </div>
  )
}

export default DrawerFooter