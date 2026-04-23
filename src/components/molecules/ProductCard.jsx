// src/components/molecules/ProductCard.jsx
import Button from "../atoms/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* CONTENEDOR DE IMAGEN */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-rougeBlack text-white text-[10px] px-2 py-1 uppercase tracking-tighter font-body">
            {product.category}
          </span>
        </div>
      </div>

      {/* INFORMACIÓN */}
      <div className="p-5 text-center">
        <h3 className="font-title text-xl text-rougeBlack mb-1 leading-tight uppercase">
          {product.name}
        </h3>
        <p className="font-body text-gray-500 text-[11px] mb-4 h-8 overflow-hidden">
          {product.description}
        </p>
        <p className="font-body text-rougeRed font-bold text-lg mb-4">
          ${product.price.toLocaleString('es-CO')}
        </p>
        
        <Button 
          label="Agregar al Carrito" 
          className="w-full py-3"
          onClick={() => alert(`Agregaste: ${product.name}`)}
        />
      </div>
    </div>
  );
};

export default ProductCard;