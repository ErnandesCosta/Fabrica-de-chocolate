import styles from './PlanoDeAcao.module.css';

// Dados extraídos da sua imagem 5W2H
const actionPlanData = [
  {
    what: 'Aumentar a temperatura do forno',
    why: 'Diminuição da duração do processo',
    where: 'Forno 2WSC',
    who: 'José',
    when: '01/Maio',
    how: 'Aumentar potência do motor',
    howMuch: 'Aumento de 0,5% do custo operacional',
  },
  {
    what: 'Incluir inspeção durante o processo',
    why: 'Muitos dias fora da meta de produção',
    where: 'Linha 17',
    who: 'Carlos',
    when: '05/Junho',
    how: 'Aumentar um operador',
    howMuch: '1 salário + benefícios',
  },
  {
    what: 'Reunião de segurança no início do turno',
    why: 'Diminuição de acidentes',
    where: 'Unidade SP',
    who: 'Larissa',
    when: '01/Março',
    how: 'Implantação de novo sistema pela Manutenção',
    howMuch: 'R$ 20.000,00',
  },
  {
    what: 'Comprar novo sistema de manutenção',
    why: 'Diminuir refugo',
    where: 'Unidade de BH',
    who:  'Roberto',
    when: '07/Maio',
    how: 'Reunião com o supervisor de segurança',
    howMuch: '5 minutos iniciais do turno (Custo zero)',
  },
];

const headers = [
  'O que? (what)',
  'Por que? (why)',
  'Onde? (where)',
  'Quem? (who)',
  'Quando? (when)',
  'Como? (how)',
  'Quanto? (how much)',
];

export default function PlanoDeAcao() {
  return (
    // Este é o painel principal, azul escuro
    <div className={styles.panel}>
      
      <h2 className={styles.title}>Plano de Ação 5W2H</h2>
      
      {/* Container para a tabela (permite scroll horizontal em telas pequenas) */}
      <div className={styles.tableContainer}>
        <table className={styles.actionTable}>
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actionPlanData.map(row => (
              <tr key={row.what}>
                <td>{row.what}</td>
                <td>{row.why}</td>
                <td>{row.where}</td>
                <td>{row.who}</td>
                <td>{row.when}</td>
                <td>{row.how}</td>
                <td>{row.howMuch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}