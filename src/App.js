import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

//todo make font smaller and adjust accordingly
function App() {
    return (
        <div className="App">
            <Router>
                <TopBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
