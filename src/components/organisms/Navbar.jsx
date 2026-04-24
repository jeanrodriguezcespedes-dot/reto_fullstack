// src/components/organisms/Navbar.jsx
import { useCartStore } from "../../store/cartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <a href="/" className="font-title text-2xl text-rougeBlack tracking-wider">
          Rouge
        </a>
        <div className="hidden md:flex items-center space-x-6 font-body text-xs uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-rougeRed transition-colors">Novedades</a>
          <a href="#" className="hover:text-rougeRed transition-colors">Utilidad</a>
          <a href="#" className="hover:text-rougeRed transition-colors">Hogar</a>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-rougeBlack">
        <button className="text-lg hover:text-rougeRed transition-all transform hover:scale-110">🔍</button>
        <button className="text-lg relative hover:text-rougeRed transition-all transform hover:scale-110">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-rougeRed text-white text-[10px] rounded-full px-1.5 font-body font-bold animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

