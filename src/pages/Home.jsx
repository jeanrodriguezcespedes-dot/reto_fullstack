// src/pages/Home.jsx
import Navbar from "../components/organisms/Navbar";
import ProductGrid from "../components/organisms/ProductGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Banner de Bienvenida con imagen de fondo */}
        <div
          className="relative py-24 px-8 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600')",
          }}
        >
          {/* Capa oscura para legibilidad del texto */}
          <div className="absolute inset-0 bg-rougeBlack/70" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-body text-xs uppercase tracking-[0.5em] text-white/70 mb-4">
              Bienvenido a Rouge
            </p>
            <h2 className="font-title text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-tight drop-shadow-lg">
              Soluciones útiles con un estilo{" "}
              <span className="text-rougeRed">sobrio y moderno</span>.
            </h2>
            <p className="font-body text-sm text-white/80 mt-6 max-w-lg mx-auto">
              Belleza, electrónica, hogar y cocina — todo en un solo lugar.
            </p>
          </div>
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