export default function Body() {
  return (
    <div className="flex flex-col mt-20 gap-20 p-2 text-center mx-auto">
      {/* About Me section */}
      <section id="about">
        <h2 className="text-2xl mb-10 w-1/2 mx-auto font-bold border-2 border-red-400 p-2 rounded-lg">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            Hi! I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
            I specialize in modern web technologies and enjoy building responsive, user-friendly applications.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      <section id="tech-stack">
        <h2 className="text-2xl mb-10 w-1/2 mx-auto font-bold border-2 border-red-400 p-2 rounded-lg">Tech Stack</h2>
        {/* First row */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="bg-red-400 p-2 rounded-lg w-32">React</div>
          <div className="bg-red-400 p-2 rounded-lg w-32">Next.js</div>
          <div className="bg-red-400 p-2 rounded-lg w-32">Tailwind CSS</div>
        </div>
        {/* Second row - offset */}
        <div className="flex justify-center gap-4 mb-4 ml-20">
          <div className="bg-red-400 p-2 rounded-lg w-32">TypeScript</div>
          <div className="bg-red-400 p-2 rounded-lg w-32">JavaScript</div>
        </div>
        {/* Third row */}
        <div className="flex justify-center gap-4">
          <div className="bg-red-400 p-2 rounded-lg w-32">Ruby</div>
          <div className="bg-red-400 p-2 rounded-lg w-32">Rails</div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="mb-20">
        <h2 className="text-2xl mb-10 w-1/2 mx-auto font-bold border-2 border-red-400 p-2 rounded-lg">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out"
            >
              ✉️ Email Me
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out"
            >
              📦 GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

