import styles from './PageStyles.module.css';

export default function Temperatura() {
  return (
    <div className={styles.pageContainer}>
      {/* Cabeçalho da Página */}
      <header className={styles.pageHeader}>
        <h2>Monitoramento de Temperatura</h2>
        <p>Análise em tempo real dos sensores IIoT na máquina T-5000.</p>
      </header>

      {/* Grade de Conteúdo */}
      <div className={styles.contentGrid}>
        
        <div className={styles.card}>
          <h3>Status Geral da T-5000</h3>
          <p className={styles.statusHighlight}>Estável</p>
          <p>Temperatura média: <strong>31.5°C</strong> (Ideal: 29-32°C)</p>
        </div>
        
        <div className={styles.card}>
          <h3>Sensor 1: Motor Principal</h3>
          <p className={styles.statusHighlight}>Estável</p>
          <p>Leitura: 32.1°C</p>
        </div>
        
        <div className={styles.card}>
          <h3>Sensor 2: Zona de Resfriamento</h3>
          <p className={styles.statusHighlight}>Estável</p>
          <p>Leitura: 29.8°C</p>
        </div>

        <div className={styles.card}>
          <h3>Informações do Plano</h3>
          <p>
            Este monitoramento utiliza sensores IIoT (Internet Industrial das Coisas)
            para medição de temperatura e vibração, conforme descrito no plano 5W2H
            para eliminar falhas térmicas.
          </p>
        </div>
      </div>
    </div>
  );
}