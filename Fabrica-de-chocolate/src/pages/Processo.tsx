import styles from './PresentationPages.module.css';
// Importe a imagem da máquina quebrando
// import machineExplodingImage from '../assets/machine_exploding.png';

export default function Processo() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.listContainer}>
        <h2 className={styles.title}>Problemas identificados</h2>
        <ul>
          <li>Alto tempo de parada por evento (45 min)</li>
          <li>Adicionais de horas extras e retrabalho</li>
          <li>300Kg de chocolates descartados</li>
          <li>Superaquecimento</li>
          <li>Falta de Monitoramento</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        {/* <img src={machineExplodingImage} alt="Problema de superaquecimento" /> */}
        <div className={styles.imagePlaceholder}>
          
        </div>
      </div>
    </div>
  );
}