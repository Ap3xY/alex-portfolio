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
        
        {/* Frontend Technologies */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 text-red-400">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                <span className="font-semibold">React</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" className="w-6 h-6" />
                <span className="font-semibold">Next.js</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>

            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
                <span className="font-semibold">Tailwind</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 text-red-400">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                <span className="font-semibold">TypeScript</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" alt="Elixir" className="w-6 h-6" />
                <span className="font-semibold">Elixir</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Technologies */}
        <div>
          <h3 className="text-xl mb-4 text-red-400">Backend</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby" className="w-6 h-6" />
                <span className="font-semibold">Ruby</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[65%]"></div>
              </div>
            </div>

            <div className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" alt="Phoenix" className="w-6 h-6" />
                <span className="font-semibold">Phoenix</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[55%]"></div>
              </div>
            </div>
          </div>
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

