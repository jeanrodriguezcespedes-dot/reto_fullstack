// src/pages/Checkout.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de procesamiento, por ahora solo navegamos al éxito
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="font-title text-3xl text-rougeBlack mb-8 uppercase tracking-widest border-b pb-4">
          Detalles de <span className="text-rougeRed">Envío</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Nombre Completo</label>
              <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Correo Electrónico</label>
              <input required type="email" className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Dirección de Entrega</label>
            <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors" placeholder="Calle, Número, Apartamento" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Ciudad</label>
              <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Teléfono</label>
              <input required type="tel" className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors" />
            </div>
          </div>

          <div className="pt-10">
            <button type="submit" className="w-full bg-rougeBlack text-white py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-rougeRed transition-all shadow-xl">
              Confirmar y Finalizar Compra
            </button>
            <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
              Pago seguro garantizado por Rouge Security
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;