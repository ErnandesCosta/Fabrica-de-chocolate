import { NavLink } from 'react-router-dom';
// ... (importações)
import styles from './Navigation.module.css';

// REMOVA "Plano de Ação" desta lista.
const navItems = [
  { path: '/temperatura', label: 'Temperatura' },
  { path: '/lubrificacao', label: 'Lubrificação' },
  { path: '/previsao-falha', label: 'Previsão de falha' },
  { path: '/proxima-manutencao', label: 'Próxima manutenção' },
];

export default function Navigation() {
  // ... (o resto do componente continua igual)
  return (
    <nav className={styles.navContainer}>
      <h2 className={styles.title}>Navegação</h2>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              » {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}