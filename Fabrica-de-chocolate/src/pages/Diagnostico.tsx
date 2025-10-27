import styles from './PresentationPages.module.css';
// Importe a imagem da máquina de chocolate
// (Você precisa salvar a imagem da máquina em 'src/assets/')
// import machineImage from '../assets/chocolate_machine.png';

export default function Diagnostico() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        {/* <img src={machineImage} alt="Máquina T-5000" /> */}
        {/* Se não tiver a imagem, use um placeholder: */}
        <div className={styles.imagePlaceholder}>
          
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>
          O desafio constatado é a falta de um sistema de monitoramento
          preditivo e de análise em tempo real na máquina T-5000, o que
          impossibilita a identificação antecipada de falhas térmicas e
          mecânicas.
        </p>
        <p>
          Atualmente, a manutenção é realizada de forma reativa, com a
          equipe intervindo somente após o superaquecimento do motor,
          resultando em paradas inesperadas e consideráveis perdas na
          produção.
        </p>
      </div>
    </div>
  );
}