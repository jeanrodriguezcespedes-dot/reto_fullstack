// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"; // Importamos el componente real que creaste
import Checkout from "./pages/Checkout";
// ... dentro de Routes
<Route path="/checkout" element={<Checkout />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ahora la ruta /cart carga la página completa de Rouge */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;