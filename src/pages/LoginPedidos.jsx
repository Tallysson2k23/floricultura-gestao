import { useNavigate } from "react-router-dom";

export default function LoginPedidos() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/pedidos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Login - Pedidos</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
