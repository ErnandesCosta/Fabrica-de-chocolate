import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbTool, TbRefresh, TbCircleCheck, TbTrophy } from 'react-icons/tb';
import styles from './Timeline.module.css';

// Mapeamento das etapas
const steps = [
  { path: '/diagnostico', icon: <TbTool />, label: 'Diagnóstico' },
  { path: '/processo', icon: <TbRefresh />, label: 'Processo' },
  { path: '/resolucao', icon: <TbCircleCheck />, label: 'Resolução' },
  { path: '/resultado', icon: <TbTrophy />, label: 'Resultado' },
];

// CORREÇÃO: Adicionamos '/automacao' a esta lista.
// Isso diz à Timeline que "Automação" faz parte da "Resolução".
const dashboardPaths = [
  '/resolucao',
  '/temperatura',
  '/lubrificacao',
  '/previsao-falha',
  '/proxima-manutencao',
  '/automacao', // <-- ESTA LINHA É A CORREÇÃO
];

export default function Timeline() {
  const location = useLocation();
  const currentPath = location.pathname;

  // --- LÓGICA DE PROGRESSO ---
  let currentActiveIndex = 0; 

  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    let isActive = false;

    if (step.path === '/resolucao') {
      isActive = dashboardPaths.includes(currentPath);
    } else {
      isActive = currentPath === step.path;
    }

    if (isActive) {
      currentActiveIndex = i;
      break; 
    }
  }
  // --- FIM DA LÓGICA ---

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {steps.map((step, index) => {
          
          const isCompleted = index <= currentActiveIndex;
          const isLineCompleted = (index + 1) <= currentActiveIndex;
          const linkPath = step.path === '/resolucao' ? '/temperatura' : step.path;

          return (
            <React.Fragment key={step.label}>
              <Link
                to={linkPath}
                className={`${styles.stepLink} ${isCompleted ? styles.active : ''}`}
              >
                <div className={styles.step}>
                  <div className={styles.iconWrapper}>
                    {step.icon}
                  </div>
                  <span className={styles.label}>{step.label}</span>
                </div>
              </Link>
              
              {index < steps.length - 1 && (
                <div 
                  className={`${styles.line} ${isLineCompleted ? styles.active : ''}`} 
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}