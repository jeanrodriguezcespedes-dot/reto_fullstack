import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Componente temporal para el carrito
const CartPage = () => (
  <div className="p-20 text-center font-title text-2xl text-rougeRed uppercase">
    Tu Carrito de Rouge está en camino...
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;