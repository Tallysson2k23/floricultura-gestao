// src/pages/TelaPedidos.jsx
import PedidoForm from "../components/PedidoForm";

export default function TelaPedidos() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Pedido</h1>
      <PedidoForm />
    </div>
  );
}
