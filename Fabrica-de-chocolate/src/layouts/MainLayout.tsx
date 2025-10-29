import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Timeline from '../components/Timeline/Timeline';

import styles from './MainLayout.module.css';

// NÃO PRECISAMOS MAIS DA LISTA 'dashboardPaths' AQUI
// O layout agora é o mesmo para todas as páginas.

// Componente simples para a caixa "CacauMaster S.A"
const Brand = () => (
  <div className={styles.brandBox}>
    CacauMaster S.A
  </div>
);

export function MainLayout() {
  const location = useLocation();

  // Define as animações
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: "easeIn" } }
  };

  return (
    // O grid principal agora é simples, sem classes condicionais
    <div className={styles.layoutGrid}>
      
      {/* 1. Header (Topo) */}
      <header className={styles.header}>
        <Header />
      </header>
      
      {/* 2. Sidebar (Esquerda) */}
      {/* A sidebar agora é permanente, como no seu print */}
      <aside className={styles.sidebar}>
        <Navigation />
        <Brand />
      </aside>

      {/* 3. Conteúdo Principal (Animado) */}
      <div className={styles.contentWrapper}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            // O conteúdo agora tem UMA classe, que é transparente
            className={styles.content}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>

      {/* 4. Footer (Timeline) */}
      <footer className={styles.footer}>
        <Timeline />
      </footer>

    </div>
  );
}