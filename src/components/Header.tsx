export default function Header() {
  return (
    <header className="flex flex-col items-center p-4 sm:p-8 gap-4 sm:gap-6 bg-slate-50 shadow-sm">
      <div className="flex justify-center items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed">
            Hi, I'm <span className="text-red-400 hover:text-red-500 transition-colors">Alex</span>. <br className="sm:hidden" /> 
            Welcome to my portfolio!
          </h1>
        </div>
      </div>
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <a 
          href="#about" 
          className="bg-red-400 hover:bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out text-sm sm:text-base"
        >
          About
        </a>
        <a 
          href="#tech-stack" 
          className="bg-red-400 hover:bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out text-sm sm:text-base"
        >
          Tech Stack
        </a>
        <a 
          href="#contact" 
          className="bg-red-400 hover:bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out text-sm sm:text-base"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
