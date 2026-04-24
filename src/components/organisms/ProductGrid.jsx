// src/components/organisms/ProductGrid.jsx
import ProductCard from "../molecules/ProductCard";
import { products } from "../../mockdata/products";
import { motion } from "framer-motion";


const ProductGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      {/* Título de la sección con Playfair Display */}
      <h2 className="font-title text-3xl text-rougeBlack mb-8 text-center uppercase tracking-widest">
        Nuestra Colección <span className="text-rougeRed">Rouge</span>
      </h2>

      {products.map((product, index) => (
        <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <ProductCard product={product} />
        </motion.div>
))}

      {/* Grid Responsivo: 1 columna en móvil, 2 en tablet, 3 o 4 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;