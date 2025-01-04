import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-300 relative">
      <div className="noise" aria-hidden="true" />
      <Header/>
      <Body/>
      <Footer/>
      <ScrollToTop />
    </main>
  )
}

export default App
