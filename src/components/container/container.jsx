
function Wrapper({ children }) {
    return (
        <div className="w-screen h-screen pt-18 transition-colors duration-500 bg-gradient-to-br from-purple-50 via-pink-200 to-pink-300 dark:from-purple-950 dark:via-fuchsia-700 dark:to-pink-900 text-gray-900 dark:text-white">
            {children}
        </div>
    )
}

export default Wrapper
