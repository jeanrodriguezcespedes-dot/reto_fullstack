// src/components/atoms/Button.jsx
const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition-colors ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;