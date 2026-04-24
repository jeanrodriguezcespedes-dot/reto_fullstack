// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Componente temporal para el carrito (lo mejoraremos en el commit #24)
const CartPlaceholder = () => (
  <div className="p-20 text-center font-title text-2xl text-rougeRed uppercase">
    Tu Carrito Rouge está en construcción...
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPlaceholder />} />
      </Routes>
    </Router>
  );
}

export default App;