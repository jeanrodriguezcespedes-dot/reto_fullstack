// src/components/molecules/ProductCard.jsx (Modificado)
import Button from "../atoms/Button";
import { useCartStore } from "../../store/cartStore"; // Importamos el store

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart); // Traemos la acción

  return (
    <div className="group bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* ... (todo el código de la imagen igual) ... */}
      <div className="p-5 text-center">
        {/* ... (nombre y precio igual) ... */}
        
        <Button 
          label="Agregar al Carrito" 
          className="w-full py-3"
          onClick={() => addToCart(product)} // Ahora sí agrega el producto real
        />
      </div>
    </div>
  );
};

export default ProductCard;