import styles from './PlanoDeAcao.module.css';

// Dados extraídos da sua imagem 5W2H
const actionPlanData = [
  {
    what: 'Aumentar a temperatura do forno',
    why: 'José',
    where: 'Forno 2WSC',
    who: 'Diminuição da duração do processo',
    when: '01/Maio',
    how: 'Aumentar potência do motor',
    howMuch: 'Aumento de 0,5% do custo operacional',
  },
  {
    what: 'Incluir inspeção durante o processo',
    why: 'Carlos',
    where: 'Linha 17',
    who: 'Muitos dias fora da meta de produção',
    when: '05/Junho',
    how: 'Aumentar um operador',
    howMuch: '1 salário + benefícios',
  },
  {
    what: 'Reunião de segurança no início do turno',
    why: 'Larissa',
    where: 'Unidade SP',
    who: 'Diminuição de acidentes',
    when: '01/Março',
    how: 'Implantação de novo sistema pela Manutenção',
    howMuch: 'R$ 20.000,00',
  },
  {
    what: 'Comprar novo sistema de manutenção',
    why: 'Roberto',
    where: 'Unidade de BH',
    who: 'Diminuir refugo',
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
    // Este container terá o fundo azul, cobrindo o fundo branco do MainLayout
    <div className={styles.pageContainer}>
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
  );
}