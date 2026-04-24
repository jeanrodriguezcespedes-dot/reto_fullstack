# Plan de Corrección - Ecommerce Rouge

## Errores Identificados
1. **Tailwind CSS v4 mal configurado** con archivos de v3
2. **Mayúsculas/minúsculas** en imports vs nombres de archivo
3. **ProductCard.jsx incompleto** (código placeholder)
4. **Estilos conflictivos** en `index.css`

## Pasos
- [x] Paso 1: Downgradear Tailwind CSS a v3 para compatibilidad con configuración actual
- [x] Paso 2: Renombrar archivos para coincidir con los imports (`productGrid.jsx` → `ProductGrid.jsx`, `CartStore.js` → `cartStore.js`)
- [x] Paso 3: Limpiar `src/index.css` y agregar directivas de Tailwind v3
- [x] Paso 4: Completar código faltante en `ProductCard.jsx`
- [x] Paso 5: Verificar que la aplicación compile y ejecute correctamente

