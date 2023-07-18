import "./App.css";
import Footer from "./Pages/Footer/Footer";
import MainRoute from "./components/MainRoute/MainRoute";
import Navebar from "./components/Navbar/Navebar";

function App() {
  return (
    <div className="App">
      <Navebar />
      <div className="info">
        <MainRoute />
        <Footer />
      </div>
    </div>
  );
}

export default App;
