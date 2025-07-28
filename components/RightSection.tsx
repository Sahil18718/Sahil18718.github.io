const RightSection = () => {
  return (
    <div className="fixed right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col items-center">
        <a
          href="mailto:sm.sahilmalviya@gmail.com"
          className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 font-mono text-sm tracking-wider"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          sm.sahilmalviya@gmail.com
        </a>
        <div className="w-px h-24 bg-gray-300 dark:bg-gray-600 mt-6"></div>
      </div>
    </div>
  )
}

export default RightSection
