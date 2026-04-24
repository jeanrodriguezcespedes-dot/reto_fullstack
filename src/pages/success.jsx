// src/pages/Success.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import Navbar from "../components/organisms/Navbar";

const Success = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Al entrar a esta página, el carrito se limpia automáticamente
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 px-8 text-center">
        <div className="w-20 h-20 bg-rougeRed text-white rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce">
          ✓
        </div>
        <h2 className="font-title text-4xl text-rougeBlack mb-4 uppercase tracking-[0.2em]">
          ¡Gracias por elegir <span className="text-rougeRed">Rouge</span>!
        </h2>
        <p className="text-gray-500 max-w-md mb-10 leading-relaxed uppercase text-[11px] tracking-widest">
          Tu pedido ha sido procesado con éxito. Recibirás un correo electrónico con los detalles del envío y el número de seguimiento.
        </p>
        <Link 
          to="/" 
          className="border border-rougeBlack text-rougeBlack px-12 py-4 font-bold uppercase text-xs tracking-widest hover:bg-rougeBlack hover:text-white transition-all"
        >
          Volver a la Galería
        </Link>
      </div>
    </div>
  );
};

export default Success;