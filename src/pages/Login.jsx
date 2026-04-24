import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Navbar from "../components/organisms/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <div className="max-w-md mx-auto p-8 pt-16">
        <h2 className="font-title text-3xl text-rougeBlack mb-2 uppercase tracking-widest text-center">
          Iniciar <span className="text-rougeRed">Sesión</span>
        </h2>
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-10">
          Bienvenido de vuelta a Rouge
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">
              Correo Electrónico
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">
              Contraseña
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-2 focus:border-rougeRed outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-rougeRed text-xs text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-rougeBlack text-white py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-rougeRed transition-all shadow-xl"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-rougeRed hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

