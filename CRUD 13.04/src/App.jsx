import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/theme.css";

function App() {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={`app-container ${theme}`}>
      <Header />

      <main className="main-content">
        <Home />
      </main>


      <Footer />
    </div>
  );
}

export default App;