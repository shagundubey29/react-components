
const DrawerBody = ({children} : {children: React.ReactNode}) : JSX.Element => {
  return (
    <div className=" flex flex-col w- px-2">
      <div className=" flex flex-col p-4 gap-4">
        <label htmlFor="userName" className=" text-lg">
          Name
        </label>
        <input
          id="username"
          placeholder="Enter your name"
          className=" border py-2 px-4 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className=" flex flex-col p-4 gap-4">
        <label htmlFor="url" className=" text-lg">
          URL
        </label>
        <div className=" w-full flex justify-start items-center border border-gray-200 rounded-md relative">
          <span className=" flex justify-center items-center bg-gray-200 h-full p-2 px-4 text-slate-700 w-[25%]">
            https://
          </span>
          <input
            id="url"
            placeholder="Please Enter Url"
            className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 p-2 w-[50%] basis-1/2 z-10 border-slate-300"
          />
          <span className=" flex justify-center items-center bg-gray-200 h-full p-2 px-4 text-slate-700 w-[25%]">
            .com
          </span>
        </div>
      </div>
      <div className=" flex flex-col p-4 gap-4">
        <label htmlFor="owner" className=" text-lg">
          Select Owner
        </label>
        <div className=" border px-4 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 pointer border-slate-300">
          <select
            id="owner"
            defaultValue="salsa"
            className="w-full focus:outline-none py-2"
          >
            <option value="salsa" className=" w-full p-8">
              Salsa Makeri
            </option>
            <option value="namiko">Namiko muksuk</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-col p-4 gap-4">
        <label htmlFor="des" className=" text-lg">
          Description
        </label>
        <textarea
          id="des"
          placeholder="Enter your thoughts"
          className=" border py-2 px-4 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-28 border-slate-300"
        />
      </div>
    </div>
  )
}

export default DrawerBody