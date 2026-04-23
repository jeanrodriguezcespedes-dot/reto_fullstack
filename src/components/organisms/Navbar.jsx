// src/components/organisms/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* LADO IZQUIERDO: LOGO */}
      <div className="flex flex-col">
        <h1 className="font-title text-3xl text-rougeRed leading-none tracking-tighter">ROUGE</h1>
        <span className="font-body text-[9px] tracking-[0.3em] text-rougeBlack font-bold uppercase">
          Accesorios y Detalles
        </span>
      </div>
      
      {/* CENTRO: NAVEGACIÓN (Desktop) */}
      <div className="hidden md:flex space-x-8 font-body text-xs uppercase tracking-widest text-rougeBlack">
        <a href="#" className="hover:text-rougeRed transition-colors font-semibold">Inicio</a>
        <a href="#" className="hover:text-rougeRed transition-colors font-semibold">Colección</a>
        <a href="#" className="hover:text-rougeRed transition-colors font-semibold">Contacto</a>
      </div>

      {/* LADO DERECHO: ACCIONES */}
      <div className="flex items-center space-x-6 text-rougeBlack">
        <button className="text-lg hover:text-rougeRed transition-all transform hover:scale-110">
          🔍
        </button>
        <button className="text-lg relative hover:text-rougeRed transition-all transform hover:scale-110">
          🛒
          <span className="absolute -top-2 -right-2 bg-rougeRed text-white text-[10px] rounded-full px-1.5 font-body font-bold">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;