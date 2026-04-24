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
      
      {/* Footer */}
      <footer className="bg-rougeBlack text-white py-12 text-center">
        <h3 className="font-title text-xl tracking-widest uppercase mb-4">
          Rouge Accesorios y Detalles
        </h3>
        <div className="font-body text-xs text-white/70 space-y-1">
          <p>Creado por: Jean Christian Rodríguez Céspedes</p>
          <p>Proyecto Final</p>
          <p>Curso Desarrollo Web FullStack React</p>
          <p className="text-white/50 mt-2">2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;