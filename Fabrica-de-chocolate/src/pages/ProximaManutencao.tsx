import styles from './PageStyles.module.css';

// Dados extraídos diretamente do cronograma no documento 5W2H 
const cronograma = [
  { periodo: 'Semanas 1–2', etapa: 'Diagnóstico técnico', desc: 'Levantamento dos dados históricos e causas das falhas' },
  { periodo: 'Semanas 3–4', etapa: 'Instalação de sensores', desc: 'Montagem e calibração dos sensores de temperatura e vibração' },
  { periodo: 'Semanas 5–6', etapa: 'Desenvolvimento do dashboard', desc: 'Criação do painel de controle (Neste caso, o App React)' },
  { periodo: 'Semana 7', etapa: 'Treinamento da equipe', desc: 'Capacitação da equipe de manutenção e operadores' },
  { periodo: 'Semana 8', etapa: 'Testes e operação', desc: 'Fase de validação e início da operação preditiva' },
];

export default function ProximaManutencao() {
  return (
    <div className={styles.pageContainer}>
      {/* Cabeçalho da Página */}
      <header className={styles.pageHeader}>
        <h2>Cronograma e Próximas Ações</h2>
        <p>Plano de implementação do sistema de manutenção preditiva.</p>
      </header>

      {/* Tabela com o Cronograma */}
      <div className={styles.card}>
        <h3>Cronograma de Implementação (5W2H)</h3>
        <table className={styles.timelineTable}>
          <thead>
            <tr>
              <th>Período (Semanas)</th>
              <th>Etapa</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {cronograma.map(item => (
              <tr key={item.etapa}>
                <td>{item.periodo}</td>
                <td>{item.etapa}</td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}