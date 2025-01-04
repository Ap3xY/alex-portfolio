export default function Header() {
  return (
    <header className="flex flex-col items-center p-8 gap-6 bg-slate-50 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-center">
          <h1 className="text-4xl font-bold leading-relaxed">
            Hi, I'm <span className="text-red-400 hover:text-red-500 transition-colors">Alex</span>. <br /> 
            Welcome to my portfolio!
          </h1>
        </div>
      </div>
      <nav className="flex gap-4">
        <a 
          href="#about" 
          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out"
        >
          About
        </a>
        <a 
          href="#tech-stack" 
          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out"
        >
          Tech Stack
        </a>
        <a 
          href="#contact" 
          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
