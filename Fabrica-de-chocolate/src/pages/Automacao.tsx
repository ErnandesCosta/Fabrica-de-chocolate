import styles from './PageStyles.module.css'; 
import workflowImage from '../assets/Frame 48.png';

export default function Automacao() {
  return (
    <div className={styles.pageContainer}>
      {/* 1. Cabeçalho Padrão */}
      <header className={styles.pageHeader}>
        <h2>Automação de Alertas (IA)</h2>
        <p>Monitoramento proativo e notificações automáticas para a equipe.</p>
      </header>

      {/* 2. Grid Padrão */}
      <div className={styles.contentGrid}>

        {/* Card 1: Imagem (AGORA OCUPANDO A LARGURA TOTAL) */}
        <div className={`${styles.card} ${styles.spanFull}`}>
          <h3>Fluxo de Automação</h3>
          <img 
            src={workflowImage} 
            alt="Fluxo de automação de alertas" 
            className={styles.cardImage}
          />
        </div>
        
        {/* Card 2: Como Funciona */}
        <div className={styles.card}>
          <h3>Como Funciona</h3>
          <p>
            Nossa IA analisa os dados dos sensores (temperatura, vibração, etc.)
            24/7.
          </p>
          <ul className={styles.customList}>
            <li><span>1.</span> IA detecta anomalia ou manutenção agendada.</li>
            <li><span>2.</span> Sistema identifica a urgência e os técnicos necessários.</li>
            <li><span>3.</span> E-mails e alertas são disparados automaticamente.</li>
            <li><span>4.</span> A manutenção é realizada *antes* da falha.</li>
          </ul>
        </div>
        
        {/* Card 3: Destinatários */}
        <div className={styles.card}>
          <h3>Destinatários dos Alertas</h3>
          <p>Os alertas são enviados em tempo real para:</p>
          <ul className={styles.customList}>
            <li>✓ Técnico de Manutenção de plantão</li>
            <li>✓ Gerente de Produção</li>
            <li>✓ Engenharia de Confiabilidade</li>
          </ul>
        </div>
        
        {/* Card 4: Dados Enviados */}
        <div className={styles.card}>
          <h3>Dados Enviados no Alerta</h3>
          <p>O técnico recebe todas as informações necessárias:</p>
          <ul className={styles.customList}>
            <li>✓ ID da Máquina: T-5000</li>
            <li>✓ Tipo de Falha: (ex: Risco de Superaquecimento)</li>
            <li>✓ Nível de Urgência: (Crítico / Alto / Médio)</li>
            <li>✓ Peças Sugeridas: (ex: Rolamento R-4B)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}