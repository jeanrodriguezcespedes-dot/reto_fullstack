import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { products } from "../../mockdata/products";

const categories = ["Belleza", "Electronicos", "Hogar", "Cocina"];

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
          {/* Búsqueda */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-lg hover:text-rougeRed transition-colors"
            >
              🔍
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-4 w-80 bg-white border border-gray-100 shadow-xl z-50">
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Buscar productos o categorías..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full border-b border-gray-200 py-2 text-sm font-body focus:border-rougeRed outline-none transition-colors"
                  />

                  {searchQuery.trim() && (
                    <div className="mt-4 space-y-3 max-h-72 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                          <Link
                            key={product.id}
                            to="/"
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery("");
                            }}
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
                                {product.category} · ${product.price.toLocaleString("es-CO")}
                              </p>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400 text-center py-4">
                          No se encontraron resultados
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

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
