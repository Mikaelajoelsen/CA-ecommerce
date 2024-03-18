import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
