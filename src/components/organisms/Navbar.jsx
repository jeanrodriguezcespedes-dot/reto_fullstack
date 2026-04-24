import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo que vuelve al inicio */}
      <Link to="/" className="flex flex-col group">
        <h1 className="font-title text-3xl text-rougeRed leading-none group-hover:text-rougeBlack transition-colors">ROUGE</h1>
        <span className="font-body text-[9px] tracking-[0.3em] text-rougeBlack font-bold uppercase">Accesorios y Detalles</span>
      </Link>
      
      <div className="flex items-center space-x-6 text-rougeBlack">
        <button className="text-lg hover:text-rougeRed transition-colors">🔍</button>
        
        {/* Carrito que lleva a la página /cart */}
        <Link to="/cart" className="text-lg relative hover:text-rougeRed transition-all transform hover:scale-110">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-rougeRed text-white text-[10px] rounded-full px-1.5 font-bold animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
