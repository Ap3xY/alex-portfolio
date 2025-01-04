
export default function Header() {
  return (
    <header className="flex flex-col items-center p-4 gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Hi, I'm <span className="text-red-400">Alex</span>. <br /> Welcome to my portfolio!</h1>
        </div>
      </div>
      <div>
        <nav className="flex gap-2">
          <a className="bg-red-400 p-2 rounded-lg">Contact</a>
          <a className="bg-red-400 p-2 rounded-lg">Tech Stack</a>
          <a className="bg-red-400 p-2 rounded-lg">Education</a>
        </nav>
      </div>
    </header>
  )
}
