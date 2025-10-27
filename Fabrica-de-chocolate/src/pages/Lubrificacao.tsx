import styles from './PageStyles.module.css';

export default function Lubrificacao() {
  return (
    <div className={styles.pageContainer}>
      {/* Cabeçalho da Página */}
      <header className={styles.pageHeader}>
        <h2>Análise de Óleo e Lubrificação</h2>
        <p>Status do sistema de análise de óleo em tempo real da T-5000.</p>
      </header>

      {/* Grade de Conteúdo */}
      <div className={styles.contentGrid}>
        
        <div className={styles.card}>
          <h3>Nível de Contaminação</h3>
          <p className={styles.statusHighlight}>Baixo</p>
          <p>Partículas por milhão (PPM): <strong>45</strong> (Limite: 100)</p>
        </div>

        <div className={styles.card}>
          <h3>Viscosidade do Óleo</h3>
          <p className={styles.statusHighlight}>Ideal</p>
          <p>Leitura atual: <strong>40 cSt</strong> (Ideal: 38-42 cSt)</p>
        </div>

        <div className={styles.card}>
          <h3>Próxima Troca Agendada</h3>
          <p>
            A IA preditiva agendou a próxima troca de óleo para <strong>15/12/2025</strong>,
            otimizando a vida útil do lubrificante.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sobre este Sistema</h3>
          <p>
            Parte da solução da Indústria 4.0, este sistema de análise de óleo
            detecta falhas de lubrificação antes que causem desgaste mecânico.
          </p>
        </div>

      </div>
    </div>
  );
}