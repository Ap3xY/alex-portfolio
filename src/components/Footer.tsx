export default function Footer() {
  return (
    <footer id="contact" className="mt-8 sm:mt-16 py-4 sm:py-6 px-4 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          Made with <span className="text-red-500">❤️</span> using{' '}
          <span className="font-medium">React, Tailwind CSS & Vite</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
