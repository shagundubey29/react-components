import { forwardRef} from 'react'
import Button from '../ui/Button'
import DrawerBody from './components/DrawerBody'
import DrawerContent from './components/DrawerContent'
import DrawerFooter from './components/DrawerFooter'
import DrawerHeader from './components/DrawerHeader'

interface drawerProp {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ref: React.Ref<HTMLInputElement>
}

const Drawer = forwardRef<HTMLInputElement, drawerProp>(({
  isOpen,
  setIsOpen,
  ref
}) => {

  const onCloseBtn = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`fixed top-0 left-0  flex bg-black/20  h-[100vh] w-[100vw] z-50 transition-all duration-500
      ${isOpen ? ' visible' : ' invisible'}
      `}
    >
      <DrawerContent isOpen={isOpen}>
        <DrawerHeader setIsOpen={setIsOpen}>Create a new account</DrawerHeader>
        <DrawerBody ref={ref}></DrawerBody>
        <DrawerFooter>
          <Button variant="outline" handleClick={onCloseBtn}>
            Close
          </Button>
          <Button variant="primary" handleClick={onCloseBtn}>
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </div>
  )
})

export default Drawer
