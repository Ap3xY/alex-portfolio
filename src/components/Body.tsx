import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TechStack from './TechStack'
import Timeline from './Timeline'

export default function Body() {
  return (
    <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-gray-900">
      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center mb-12"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a 
          href="#about"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
          aria-label="Scroll to about section"
        >
          <svg 
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>

      {/* About Me section */}
      <section className="max-w-4xl mx-auto mb-16 sm:mb-24 mt-8 sm:mt-12" id="about">
        <SectionHeading title="About Me" />
        <div className="max-w-2xl mx-auto px-4 text-gray-800 dark:text-gray-200">
          <p className="text-base sm:text-lg mb-4">
            Hi! I'm a full-stack developer with 1 year of professional experience working in a startup environment. 
            I've specialized in modern web development, particularly with Next.js, TypeScript, and Tailwind CSS, 
            while building and maintaining a sophisticated vouchering system.
          </p>
          <p className="text-base sm:text-lg mb-4">
            My expertise lies in creating responsive, user-friendly web applications using React-based technologies. 
            Through my startup experience, I've gained valuable insights into building scalable solutions and 
            working in an agile environment. I'm passionate about clean code, modern development practices, and 
            continuously expanding my technical knowledge.
          </p>
          <p className="text-base sm:text-lg">
            Currently, I'm self-studying Elixir and Ruby on Rails to deepen my understanding of both functional 
            programming and object-oriented programming paradigms. This journey helps me become a more well-rounded 
            developer and brings fresh perspectives to my software development approach.
          </p>
        </div>
      </section>

      {/* Timeline section */}
      <motion.section 
        className="max-w-4xl mx-auto mb-16 sm:mb-24"
        id="timeline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="Experience & Education" />
        <Timeline />
      </motion.section>

      <section className="mb-16 sm:mb-24">
        <TechStack />
      </section>

      {/* Contact section */}
      <section className="max-w-4xl mx-auto mb-16 sm:mb-24" id="contact">
        <SectionHeading title="Contact" />
        <div className="max-w-2xl mx-auto px-4 text-gray-800 dark:text-gray-200">
          <p className="text-base sm:text-lg mb-6">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <a 
              href="mailto:alexvdberg010109@gmail.com" 
              className="flex items-center justify-center gap-2 bg-red-400 hover:bg-red-500 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out text-base sm:text-lg"
            >
              ✉️ Email Me
            </a>
            <a 
              href="https://github.com/Ap3xY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-red-400 hover:bg-red-500 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out text-base sm:text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/alexvdberg010109/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-red-400 hover:bg-red-500 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out text-base sm:text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

