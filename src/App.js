import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Open from "./components/Open";
import "./index.css";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Open />
      </div>
      <Footer />
    </>
  );
}

export default App;
