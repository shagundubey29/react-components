import Button from '../ui/Button'
import DrawerBody from './components/DrawerBody'
import DrawerContent from './components/DrawerContent'
import DrawerFooter from './components/DrawerFooter'
import DrawerHeader from './components/DrawerHeader'

const Drawer = () => {
  return (
    <div className=" fixed top-0 left-0  flex bg-black/20  h-[100vh] w-[100vw] z-50">
      <DrawerContent>
        <DrawerHeader>Create a new account</DrawerHeader>
        <DrawerBody></DrawerBody>
        <DrawerFooter>
          <Button variant="outline">Close</Button>
          <Button variant="primary">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </div>
  )
}

export default Drawer
