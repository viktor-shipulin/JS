import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./Pages/Home";
import "./App.css";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}


export default App;