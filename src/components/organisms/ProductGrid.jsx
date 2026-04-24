// src/components/organisms/ProductGrid.jsx
import { useState } from "react";
import ProductCard from "../molecules/ProductCard";
import ProductModal from "../molecules/ProductModal";
import { products } from "../../mockdata/products";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      {/* Título de la sección con Playfair Display */}
      <h2 className="font-title text-3xl text-rougeBlack mb-8 text-center uppercase tracking-widest">
        Nuestra Colección <span className="text-rougeRed">Rouge</span>
      </h2>

      {/* Grid Responsivo: 1 columna en móvil, 2 en tablet, 3 o 4 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} onSelect={setSelectedProduct} />
          </motion.div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductGrid;
