import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Timeline from '../components/Timeline/Timeline';

// Importa os estilos do CSS Module
import styles from './MainLayout.module.css';

// Componente simples para a caixa "CacauMaster S.A"
const Brand = () => (
  <div className={styles.brandBox}>
    CacauMaster S.A
  </div>
);

export function MainLayout() {
  return (
    <div className={styles.layoutGrid}>
      
      {/* 1. Header (Topo) */}
      <header className={styles.header}>
        <Header />
      </header>
      
      {/* 2. Sidebar (Esquerda) */}
      <aside className={styles.sidebar}>
        <Navigation />
        <Brand />
      </aside>

      {/* 3. Conteúdo Principal (Centro) */}
      <main className={styles.content}>
        {/* O <Outlet /> renderiza as suas páginas (Temperatura, Lubrificação, etc.) */}
        <Outlet />
      </main>

      {/* 4. Footer/Timeline (Baixo) */}
      <footer className={styles.footer}>
        <Timeline />
      </footer>

    </div>
  );
}