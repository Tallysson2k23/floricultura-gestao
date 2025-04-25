import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPedidos from "./pages/LoginPedidos";
import LoginProducao from "./pages/LoginProducao";
import TelaPedidos from "./pages/TelaPedidos";
import TelaProducao from "./pages/TelaProducao";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPedidos />} />
        <Route path="/producao" element={<LoginProducao />} />
        <Route path="/pedidos" element={<TelaPedidos />} />
        <Route path="/painel-producao" element={<TelaProducao />} />
      </Routes>
    </Router>
  );
}