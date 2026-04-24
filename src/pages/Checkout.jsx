import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import Navbar from "../components/organisms/Navbar";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white font-body">
        <Navbar />
        <div className="max-w-2xl mx-auto p-8 text-center pt-20">
          <h2 className="font-title text-3xl text-rougeBlack mb-4 uppercase tracking-widest">
            Carrito <span className="text-rougeRed">Vacío</span>
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-8">
            Agrega productos para continuar con tu compra
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-rougeBlack text-white px-12 py-4 uppercase text-xs font-bold tracking-widest hover:bg-rougeRed transition-all shadow-lg"
          >
            Explorar Tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
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

        <div className="bg-gray-50 p-8 h-fit">
          <h3 className="font-title text-xl text-rougeBlack uppercase tracking-widest border-b border-gray-200 pb-4 mb-6">
            Resumen del Pedido
          </h3>

          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border border-gray-200" />
                <div className="flex-1">
                  <p className="font-body text-xs text-rougeBlack uppercase">{item.name}</p>
                  <p className="text-[10px] text-gray-400">Cantidad: {item.quantity}</p>
                </div>
                <p className="font-body text-sm font-bold text-rougeBlack">
                  ${(item.price * item.quantity).toLocaleString("es-CO")}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Subtotal</span>
              <span>${total.toLocaleString("es-CO")}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between font-title text-lg text-rougeBlack pt-4 border-t border-gray-200">
              <span>TOTAL</span>
              <span className="text-rougeRed">${total.toLocaleString("es-CO")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
