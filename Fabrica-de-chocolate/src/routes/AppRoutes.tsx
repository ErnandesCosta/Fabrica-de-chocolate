import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Importa as páginas principais (da nova Sidebar)
import Diagnostico from '../pages/Diagnostico.tsx';
import Processo from '../pages/Processo.tsx';
import PlanoDeAcao from '../pages/PlanoDeAcao.tsx';

// Importa as sub-páginas do Dashboard (da nova Sidebar)
import Temperatura from '../pages/Temperatura.tsx';
import Lubrificacao from '../pages/Lubrificacao.tsx';
import PrevisaoFalha from '../pages/PrevisaoFalha.tsx';
import ProximaManutencao from '../pages/ProximaManutencao.tsx';
import Automacao from '../pages/Automacao.tsx';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* O MainLayout é o "molde" fixo para todas as páginas */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Rota inicial: redireciona para a primeira etapa, "Diagnóstico" */}
          <Route index element={<Navigate to="/diagnostico" replace />} />

          {/* --- ROTAS PRINCIPAIS DA SIDEBAR --- */}

          {/* Etapa 1: Diagnóstico */}
          <Route path="diagnostico" element={<Diagnostico />} />
          
          {/* Etapa 2: Processo */}
          <Route path="processo" element={<Processo />} />

          {/* Etapa 4: Resultado */}
          <Route path="resultado" element={<PlanoDeAcao />} />


          {/* --- ROTAS DO SUB-MENU "RESOLUÇÃO (DASHBOARD)" --- */}

          {/* O link "Resolução" na sidebar nos leva direto para "Temperatura" */}
          <Route path="resolucao" element={<Navigate to="/temperatura" replace />} />
          
          {/* As páginas "filhas" do dashboard */}
          <Route path="temperatura" element={<Temperatura />} />
          <Route path="lubrificacao" element={<Lubrificacao />} />
          <Route path="previsao-falha" element={<PrevisaoFalha />} />
          <Route path="proxima-manutencao" element={<ProximaManutencao />} />
          <Route path="automacao" element={<Automacao />} />

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}