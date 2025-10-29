import { useState } from 'react';
import styles from './PresentationPages.module.css';

// Importe seus arquivos de mídia da pasta assets
import videoSrc from '../assets/problema_t5000.mp4';
import imgSrc from '../assets/problema_t5000.gif';

export default function Diagnostico() {
  // Estado para controlar a aba ativa ('video' ou 'image')
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className={styles.pageContainer}>
      
      {/* Coluna 1: O Texto do Diagnóstico */}
      <div className={styles.textContainer}>
        <h2 className={styles.pageTitle}>Diagnóstico do Problema</h2>
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

      {/* Coluna 2: O Bloco de Mídia com Abas */}
      <div className={styles.mediaContainer}>
        {/* As abas para escolher */}
        <div className={styles.mediaTabs}>
          <button
            className={`${styles.tabButton} ${activeTab === 'video' ? styles.active : ''}`}
            onClick={() => setActiveTab('video')}
          >
            Vídeo (O Problema)
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'image' ? styles.active : ''}`}
            onClick={() => setActiveTab('image')}
          >
            Imagem (Máquina)
          </button>
        </div>

        {/* O conteúdo da mídia (vídeo ou imagem) */}
        <div className={styles.mediaContent}>
          {activeTab === 'video' && (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline // Essencial para autoplay em alguns navegadores
              className={styles.mediaAsset}
              aria-label="Animação da máquina T-5000 superaquecendo"
            />
          )}
          {activeTab === 'image' && (
            <img
              src={imgSrc}
              alt="Máquina T-5000"
              className={styles.mediaAsset}
            />
          )}
        </div>
      </div>

    </div>
  );
}