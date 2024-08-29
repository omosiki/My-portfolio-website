import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/intro";
import About from "./component/About/About";
import Mywork from "./component/Mywork/work"
// import Mywork from "./assets/data";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Mywork/>
    </div>
  );
}

export default App;
