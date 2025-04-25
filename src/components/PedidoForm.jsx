import { useState } from "react";

export default function PedidoForm() {
  const [form, setForm] = useState({
    nome: "",
    qnt: 1,
    tipo: "1",
    numero: "",
    produto: "flor1",
    data: new Date().toISOString().substring(0, 10),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const confirmarEnvio = () => {
    if (confirm("Tem certeza que deseja enviar esse pedido?")) {
      alert("Pedido enviado com sucesso!");
    }
  };

  const confirmarCancelamento = () => {
    if (confirm("Tem certeza que deseja cancelar o pedido?")) {
      setForm({ nome: "", qnt: 1, tipo: "1", numero: "", produto: "flor1", data: new Date().toISOString().substring(0, 10) });
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow space-y-4">
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="number" name="qnt" placeholder="Quantidade" value={form.qnt} onChange={handleChange} className="w-full p-2 border rounded" />
      <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="1">Retirada</option>
        <option value="2">Entrega</option>
      </select>
      <input name="numero" placeholder="Número do pedido" value={form.numero} onChange={handleChange} className="w-full p-2 border rounded" />
      <select name="produto" value={form.produto} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="flor1">Flor 1</option>
        <option value="flor2">Flor 2</option>
        <option value="buque1">Buquê 1</option>
        <option value="buque2">Buquê 2</option>
      </select>
      <input type="date" name="data" value={form.data} onChange={handleChange} className="w-full p-2 border rounded" />
      <div className="flex justify-between">
        <button type="button" onClick={confirmarEnvio} className="bg-green-600 text-white px-4 py-2 rounded">Enviar</button>
        <button type="button" onClick={confirmarCancelamento} className="bg-red-600 text-white px-4 py-2 rounded">Cancelar</button>
      </div>
    </form>
  );
}