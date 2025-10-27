import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Importe as páginas do Dashboard (Sidebar)
import Temperatura from '../pages/Temperatura.tsx';
import Lubrificacao from '../pages/Lubrificacao.tsx';
import PrevisaoFalha from '../pages/PrevisaoFalha.tsx';
import ProximaManutencao from '../pages/ProximaManutencao.tsx';

// Importe as páginas da Timeline
import Diagnostico from '../pages/Diagnostico.tsx';
import Processo from '../pages/Processo.tsx';
import PlanoDeAcao from '../pages/PlanoDeAcao.tsx'; // Já criamos esta

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* O MainLayout é o "molde" fixo */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Rota inicial: redireciona para Diagnóstico */}
          <Route index element={<Navigate to="/diagnostico" replace />} />

          {/* Rotas da TIMELINE */}
          <Route path="diagnostico" element={<Diagnostico />} />
          <Route path="processo" element={<Processo />} />
          
          {/* RESOLUÇÃO: É o Dashboard! 
            Você disse que o "dashboard" era uma das etapas.
            Vamos fazer "Resolução" levar para a página "Temperatura".
          */}
          <Route path="resolucao" element={<Navigate to="/temperatura" replace />} />
          
          {/* RESULTADO: É o Plano de Ação!
            Você disse que o "plano de ação" era os "resultados".
          */}
          <Route path="resultado" element={<PlanoDeAcao />} />


          {/* Rotas da SIDEBAR (Navegação) */}
          {/* Elas são as "filhas" da Resolução (o dashboard) */}
          <Route path="temperatura" element={<Temperatura />} />
          <Route path="lubrificacao" element={<Lubrificacao />} />
          <Route path="previsao-falha" element={<PrevisaoFalha />} />
          <Route path="proxima-manutencao" element={<ProximaManutencao />} />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}