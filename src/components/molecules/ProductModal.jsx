// src/components/molecules/ProductModal.jsx
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

const ProductModal = ({ product, onClose }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : null
  );

  if (!product) return null;

  const handleAddToCart = () => {
    const productWithColor = {
      ...product,
      selectedColor,
    };
    addToCart(productWithColor);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-rougeRed transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Galería de imágenes */}
          <div className="p-6 md:p-8 bg-gray-50">
            <div className="aspect-square overflow-hidden border border-gray-100 bg-white mb-4">
              <img
                src={product.gallery[selectedImage]}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-3">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 border overflow-hidden transition-all ${
                    selectedImage === index
                      ? "border-rougeRed ring-1 ring-rougeRed"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div className="p-6 md:p-8 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-body">
              {product.category}
            </p>
            <h2 className="font-title text-2xl md:text-3xl text-rougeBlack mb-4">
              {product.name}
            </h2>
            <p className="font-title text-3xl text-rougeRed mb-6">
              ${product.price.toLocaleString("es-CO")}
            </p>

            <p className="font-body text-sm text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Selector de colores */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <p className="font-body text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Color: <span className="text-rougeBlack">{selectedColor}</span>
                </p>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-xs font-body uppercase tracking-wider transition-all ${
                        selectedColor === color
                          ? "border-rougeRed text-rougeRed bg-rougeRed/5"
                          : "border-gray-200 text-gray-500 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-rougeRed text-white font-body font-bold uppercase text-xs tracking-widest hover:bg-rougeBlack transition-all duration-300 shadow-sm"
              >
                Agregar al Carrito
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-3 uppercase tracking-widest">
                Envío gratis en compras superiores a $200.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

