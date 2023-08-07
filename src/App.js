import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import MainRoute from "./components/MainRoute/MainRoute";
import Navebar from "./components/Navbar/Navebar";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import TopNavbar from "./components/TopNavbar/TopNavbar";

function App() {
  const location = useLocation(); 

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval); 
      }
    }, 15);
  };

  const handleScrollToTop = () => {
    scrollToTop();
  };

  // scrole to bottom
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {location.pathname == "/" ? <Navebar /> : <TopNavbar />}
      <div className="info">
        <MainRoute />
        <Footer />
      </div>
      <div className="scrole_button">
        <button onClick={handleScrollToTop}>
          <MdKeyboardDoubleArrowUp size={"25px"} color="white" />
        </button>
        <button onClick={handleScrollToBottom}>
          <MdKeyboardDoubleArrowDown size={"25px"} color="white" />
        </button>
      </div>
    </div>
  );
}

export default App;
