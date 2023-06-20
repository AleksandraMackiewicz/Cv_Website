
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import About from "./routes/about"
import Contact from "./routes/contact"
import Experience from "./routes/experience"
function App() {
  return (
    <div className="App">
           <Navbar />

        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/contact" element={<Contact/>}/>


        </Routes>

    </div>
  );
}

export default App;
