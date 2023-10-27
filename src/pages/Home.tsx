import { useState, useRef } from 'react'
import Drawer from '../components/drawer/Drawer'
import Button from '../components/ui/Button'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const firstInputRef = useRef<HTMLInputElement>(null)

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" relative flex flex-col justify-center items-start p-4">
        <p className=" mb-4">
          This is home page and you are going to see the functionality of Drawer
          This is home page and you are going to see the functionality of Drawer
          This is home page and you are going to see the functionality of Drawer
          This is home page and you are going to see the functionality of Drawer
          This is home page and you are going to see the functionality of Drawer
          This is home page and you are going to see the functionality of Drawer
        </p>
        <Button variant="primary" handleClick={openDrawer}>
          Edit Info
        </Button>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} ref={firstInputRef} />
    </>
  )
}

export default Home
