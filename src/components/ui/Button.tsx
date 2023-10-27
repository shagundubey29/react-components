const Button = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: string
}): JSX.Element => {
  return (
    <button
      className={`px-6 py-2 text-base rounded-md font-semibold  ${
        variant === 'outline'
          ? 'bg-white text-black hover:bg-gray-300 border border-gray-300'
          : 'text-white hover:bg-sky-700 bg-sky-500 '
      }`}
    >
      {children}
    </button>
  )
}

export default Button
