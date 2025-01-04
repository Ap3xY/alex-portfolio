import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
 
  return (
    <main className="flex flex-col min-h-screen bg-zinc-300">
      <Header/>
      <Body/>
      <Footer/>
    </main>
  )
}

export default App
