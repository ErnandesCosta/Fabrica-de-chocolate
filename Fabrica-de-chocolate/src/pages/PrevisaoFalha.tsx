import styles from './PageStyles.module.css'; // Usando o CSS do dashboard

export default function PrevisaoFalha() {
  return (
    <div className={styles.pageContainer}>
      {/* Cabeçalho da Página */}
      <header className={styles.pageHeader}>
        <h2>Previsão de Falhas (IA e Gêmeo Digital)</h2>
        <p>Monitoramento preditivo de anomalias e desgaste de componentes.</p>
      </header>
      
      {/* Grid de Conteúdo */}
      <div className={styles.contentGrid}>

        {/* Card 1 */}
        <div className={styles.card}>
          <h3>Análise de Vibração (IA)</h3>
          <p className={styles.statusHighlight}>Estável</p>
          <p>
            A IA não detectou nenhuma anomalia de vibração nos sensores IIoT.
            O padrão está dentro da normalidade operacional.
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <h3>Gêmeo Digital (Digital Twin)</h3>
          {/* Note a classe 'styles.alert' para o status */}
          <p className={`${styles.statusHighlight} ${styles.alert}`}>Alerta</p>
          <p>
            Simulação de desgaste indica que o <strong>Rolamento R-4B</strong> atingirá
            75% de sua vida útil em <strong>48 horas</strong>.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className={styles.card}>
          <h3>Saúde dos Componentes</h3>
          <ul className={styles.customList}>
            <li>✓ Motor Principal: <strong>98%</strong></li>
            <li>✓ Sistema de Resfriamento: <strong>95%</strong></li>
            {/* Note a classe 'styles.alertText' para o item da lista */}
            <li className={styles.alertText}>✓ Rolamento R-4B: <strong>74%</strong> (Agendar verificação)</li>
            <li>✓ Correias: <strong>89%</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
}