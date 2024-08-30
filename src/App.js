import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/intro";
import About from "./component/About/About";
import Mywork from "./component/Mywork/work";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
import { useState } from "react";


// import Mywork from "./assets/data";
function App() {


const [showContact, setShowContact] = useState(false); // State to manage visibility

const handleContactClick = () => {
    setShowContact(!showContact); // Toggle the visibility of the Contact component
};
  return (
    <div className="App">
     <div>
            <Navbar onContactClick={handleContactClick} /> 
            {showContact && <Contact />}
        </div>
    <Intro/>
    <About/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
