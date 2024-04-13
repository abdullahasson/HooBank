const Button = ({ children, className }) => {
    return (
        <button className={`
            ${className || null}
            bg-gradient-to-r from-[#7DE7EB] to-[#33BBCF] hover:from-[#33BBCF] hover:to-[#33BBCF] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce
        `}>{children}</button>
    )
}

export default Button;