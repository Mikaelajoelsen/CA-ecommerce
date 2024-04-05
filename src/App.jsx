import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </>
      <Cart />
    </>
  );
}

export default App;
