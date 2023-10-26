import React from 'react'

const AccordionArea = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div className=" relative w-[50rem]  flex justify-center items-center flex-col p-4 rounded-lg border">
      <ul className=" relative w-full">{children}</ul>
    </div>
  )
}

export default AccordionArea
