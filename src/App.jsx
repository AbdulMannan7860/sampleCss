import Home from "./components/Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Constants/Footer"
import Header from "./components/Constants/Header"
import Portfolio from "./components/Pages/Portfolio"
import Services from "./components/Pages/Services"
import Contact from "./components/Pages/Contact"
import NotFound from "./components/Pages/NotFound"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
