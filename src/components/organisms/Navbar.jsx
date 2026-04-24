import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { products } from "../../mockdata/products";

const categories = ["Belleza", "Electronicos", "Hogar", "Cocina"];

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo que vuelve al inicio */}
        <Link to="/" className="flex flex-col group shrink-0">
          <h1 className="font-title text-3xl text-rougeRed leading-none group-hover:text-rougeBlack transition-colors">
            ROUGE
          </h1>
          <span className="font-body text-[9px] tracking-[0.3em] text-rougeBlack font-bold uppercase">
            Accesorios y Detalles
          </span>
        </Link>

        {/* Categorías con dropdown */}
        <div className="hidden md:flex items-center space-x-8 ml-12">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category);
            return (
              <div key={category} className="relative group">
                <span className="font-body text-xs uppercase tracking-widest text-gray-500 hover:text-rougeRed transition-colors cursor-pointer">
                  {category}
                </span>

                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4 px-5">
                    <p className="font-title text-sm text-rougeBlack uppercase tracking-widest border-b border-gray-100 pb-2 mb-3">
                      {category}
                    </p>
                    <div className="space-y-3">
                      {categoryProducts.map((product) => (
                        <Link
                          key={product.id}
                          to="/"
                          className="flex items-center space-x-3 group/item"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover border border-gray-100"
                          />
                          <div>
                            <p className="font-body text-xs text-rougeBlack group-hover/item:text-rougeRed transition-colors leading-tight">
                              {product.name}
                            </p>
                            <p className="font-body text-[10px] text-gray-400 mt-0.5">
                              ${product.price.toLocaleString("es-CO")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center space-x-6 text-rougeBlack">
          <button className="text-lg hover:text-rougeRed transition-colors">
            🔍
          </button>

          {/* Carrito que lleva a la página /cart */}
          <Link
            to="/cart"
            className="text-lg relative hover:text-rougeRed transition-all transform hover:scale-110"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rougeRed text-white text-[10px] rounded-full px-1.5 font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
