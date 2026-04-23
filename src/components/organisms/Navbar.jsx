// src/components/organisms/Navbar.jsx (Modificado)
import { useCartStore } from "../../store/cartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  // Sumamos las cantidades de todos los productos en el carrito
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* ... logo y links igual ... */}

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