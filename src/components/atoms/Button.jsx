// src/components/atoms/Button.jsx

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      /* Explicación de las clases:
         - bg-rougeRed: El rojo institucional de Rouge.
         - font-body: La fuente Montserrat que configuramos.
         - hover:bg-rougeBlack: Cambia a negro al pasar el mouse (el 10% de tu paleta).
         - transition-all: Para que el cambio de color sea suave.
      */
      className={`px-6 py-2 bg-rougeRed text-white font-body font-bold uppercase text-xs tracking-widest hover:bg-rougeBlack transition-all duration-300 shadow-sm active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;