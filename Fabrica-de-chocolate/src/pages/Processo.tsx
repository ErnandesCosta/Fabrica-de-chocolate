import styles from './PresentationPages.module.css';
// Importe a imagem do problema
import machineImage from '../assets/image 1.png';

// Lista de problemas com mais detalhes
const problems = [
  { title: 'Alto tempo de parada por evento (45 min)', desc: 'Cada falha de superaquecimento interrompe a produção por 45 minutos.' },
  { title: 'Adicionais de horas extras e retrabalho', desc: 'A equipe de manutenção precisa ser paga para consertar e reiniciar a linha.' },
  { title: '300Kg de chocolates descartados', desc: 'Produto perdido por semana devido a falhas de temperagem durante as paradas.' },
  { title: 'Superaquecimento', desc: 'A causa raiz das falhas, danificando componentes e o produto.' },
  { title: 'Falta de Monitoramento', desc: 'A manutenção é 100% reativa, sem nenhum aviso prévio da falha.' },
];

export default function Processo() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Coluna 1: A Lista de Problemas (agora mais detalhada) */}
      <div className={styles.listContainer}>
        <h2 className={styles.title}>Problemas Identificados</h2>
        
        {problems.map(problem => (
          <div className={styles.problemItem} key={problem.title}>
            <span className={styles.problemCheck}>✓</span>
            <div>
              <h3 className={styles.problemTitle}>{problem.title}</h3>
              <p className={styles.problemDesc}>{problem.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Coluna 2: A Imagem + O Novo Painel de Impacto */}
      <div className={styles.rightColumn}>
        
        {/* A Imagem */}
        <div className={styles.imageContainer}>
          <img 
            src={machineImage} 
            alt="Problema de superaquecimento na máquina"
            className={styles.mediaAsset} 
          />
        </div>

        {/* O Painel de Impacto (NOVO) */}
        <div className={styles.impactCard}>
          <h3 className={styles.impactTitle}>Impacto Financeiro Semanal</h3>
          <p className={styles.impactValue}>R$ 12.000,00</p>
          <div className={styles.impactDetails}>
            <p><strong>R$ 9.000,00</strong> (Refugo de 300kg de chocolate) </p>
            <p><strong>R$ 3.000,00</strong> (Custos de retrabalho e horas extras) </p>
          </div>
        </div>

      </div>

    </div>
  );
}