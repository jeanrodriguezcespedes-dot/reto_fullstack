import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="font-title text-4xl text-rougeBlack mb-8 uppercase tracking-widest border-b pb-4">
          Tu Selección <span className="text-rougeRed">Rouge</span>
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-6 uppercase tracking-widest">No hay artículos seleccionados</p>
            <Link to="/" className="bg-rougeRed text-white px-8 py-3 font-bold uppercase text-xs hover:bg-rougeBlack transition-all">
              Explorar Tienda
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-6 border-gray-50">
                <div className="flex items-center space-x-6">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                  <div>
                    <h3 className="font-title text-xl text-rougeBlack uppercase">{item.name}</h3>
                    <p className="text-rougeRed font-bold text-lg">${item.price.toLocaleString('es-CO')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-gray-100">-</button>
                    <span className="px-3 font-bold text-rougeBlack">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-100">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-rougeRed transition-colors uppercase text-[10px] font-bold">Quitar</button>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-end pt-10">
              <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">Total Estimado</p>
              <p className="text-4xl font-title text-rougeRed mb-8">${total.toLocaleString('es-CO')}</p>
                <Link to="/checkout" className="bg-rougeBlack text-white px-12 py-4 uppercase text-xs font-bold tracking-widest hover:bg-rougeRed transition-all shadow-lg">
                    Proceder al Pago
                </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;