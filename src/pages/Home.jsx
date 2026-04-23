// src/pages/Home.jsx
import Navbar from "../components/organisms/Navbar";
import ProductGrid from "../components/organisms/ProductGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Banner de Bienvenida (Opcional pero recomendado para Rouge) */}
        <div className="bg-gray-50 py-16 px-8 text-center border-b border-gray-100">
          <p className="font-body text-xs uppercase tracking-[0.5em] text-gray-400 mb-4">Bienvenido a Rouge</p>
          <h2 className="font-title text-4xl md:text-5xl text-rougeBlack max-w-2xl mx-auto leading-tight">
            Soluciones útiles con un estilo <span className="text-rougeRed">sobrio y moderno</span>.
          </h2>
        </div>

        <ProductGrid />
      </main>
      
      {/* Footer simple para completar la estructura */}
      <footer className="bg-rougeBlack text-white py-10 text-center font-body text-[10px] tracking-widest uppercase">
        © 2024 Rouge Accesorios y Detalles - Estilo y Utilidad
      </footer>
    </div>
  );
};

export default Home;