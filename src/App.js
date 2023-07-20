import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import MainRoute from "./components/MainRoute/MainRoute";
import Navebar from "./components/Navbar/Navebar";

function App() {
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
      <Navebar />
      <div className="info">
        <MainRoute />
        <Footer />
      </div>
      <div className="scrole_button">
        <button onClick={handleScrollToTop}> 
          <ImArrowUp2 color="black" />
        </button>
        <button onClick={handleScrollToBottom}> 
          <ImArrowDown2 />
        </button>
      </div>
    </div>
  );
}

export default App;
