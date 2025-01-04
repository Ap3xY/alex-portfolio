import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="noise" aria-hidden="true" />
      <Header/>
      <Body/>
      <Footer/>
      <ScrollToTop />
    </div>
  )
}

export default App
