// src/components/molecules/ProductCard.jsx
import Button from "../atoms/Button";
import { useCartStore } from "../../store/cartStore";

const ProductCard = ({ product, onSelect }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className="relative overflow-hidden aspect-[4/3] cursor-pointer"
        onClick={() => onSelect && onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-body">
          {product.category}
        </p>
        <h3
          className="font-title text-lg text-rougeBlack mb-1 leading-tight cursor-pointer hover:text-rougeRed transition-colors"
          onClick={() => onSelect && onSelect(product)}
        >
          {product.name}
        </h3>
        <p className="font-body text-sm text-gray-500 mb-4">
          ${product.price.toLocaleString("es-CO")}
        </p>

        <Button
          label="Agregar al Carrito"
          className="w-full py-3"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
