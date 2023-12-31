import { useEffect, useRef} from 'react'
import Button from '../ui/Button'
import DrawerBody from './components/DrawerBody'
import DrawerContent from './components/DrawerContent'
import DrawerFooter from './components/DrawerFooter'
import DrawerHeader from './components/DrawerHeader'

interface drawerProp {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({
  isOpen,
  setIsOpen,
} : drawerProp) => {
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      console.log(firstInputRef.current)
      firstInputRef.current.focus()
    }
  }, [isOpen, firstInputRef])

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
        <DrawerBody ref={firstInputRef} ></DrawerBody>
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
}

export default Drawer
