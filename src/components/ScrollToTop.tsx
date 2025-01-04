import { motion, useScroll, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show button when user scrolls down 20% of the page
      if (latest > 0.2) {
        controls.start("visible")
      } else {
        controls.start("hidden")
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, controls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      className="fixed bottom-4 right-4 bg-red-400 hover:bg-red-500 text-white p-3 rounded-full shadow-lg"
      onClick={scrollToTop}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.2 }
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </motion.button>
  )
} 