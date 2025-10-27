import React from 'react';
// Importamos 'Link' e 'useLocation' em vez de 'NavLink'
import { Link, useLocation } from 'react-router-dom';
import { TbTool, TbRefresh, TbCircleCheck, TbTrophy } from 'react-icons/tb';
// Garanta que esta importação está correta!
import styles from './Timeline.module.css';

// Mapeamento das etapas
const steps = [
  { path: '/diagnostico', icon: <TbTool />, label: 'Diagnóstico' },
  { path: '/processo', icon: <TbRefresh />, label: 'Processo' },
  { path: '/resolucao', icon: <TbCircleCheck />, label: 'Resolução' },
  { path: '/resultado', icon: <TbTrophy />, label: 'Resultado' },
];

// Lista de todas as páginas que fazem parte da fase "Resolução"
const dashboardPaths = [
  '/resolucao',
  '/temperatura',
  '/lubrificacao',
  '/previsao-falha',
  '/proxima-manutencao', // A página que você está vendo no print!
];

export default function Timeline() {
  const location = useLocation(); // Pega a localização atual da URL
  const currentPath = location.pathname;

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {steps.map((step, index) => {
          
          // Verificação inteligente de "ativo"
          let isActive = false;
          if (step.path === '/resolucao') {
            // Se for 'Resolução', verifica se o path atual está na *lista* de paths
            isActive = dashboardPaths.includes(currentPath);
          } else {
            // Para os outros, a verificação é normal
            isActive = currentPath === step.path;
          }

          // A etapa 'Resolução' sempre vai linkar para a primeira página do dashboard
          const linkPath = step.path === '/resolucao' ? '/temperatura' : step.path;

          return (
            <React.Fragment key={step.label}>
              <Link
                to={linkPath}
                // Aplica a classe 'active' manualmente se 'isActive' for verdadeiro
                className={`${styles.stepLink} ${isActive ? styles.active : ''}`}
              >
                <div className={styles.step}>
                  <div className={styles.iconWrapper}>
                    {step.icon}
                  </div>
                  <span className={styles.label}>{step.label}</span>
                </div>
              </Link>
              {index < steps.length - 1 && <div className={styles.line}></div>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}