// src/components/organisms/ProductGrid.jsx
import { useState } from "react";
import ProductCard from "../molecules/ProductCard";
import ProductModal from "../molecules/ProductModal";
import { products } from "../../mockdata/products";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 8;

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="font-title text-3xl text-rougeBlack mb-8 text-center uppercase tracking-widest">
        Nuestra Colección <span className="text-rougeRed">Rouge</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentProducts.map((product, index) => (
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

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-200 text-xs font-body uppercase tracking-widest hover:border-rougeRed hover:text-rougeRed transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="font-body text-xs text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-200 text-xs font-body uppercase tracking-widest hover:border-rougeRed hover:text-rougeRed transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      )}

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
