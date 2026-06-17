import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ data }) {
  const itogData = calculateInvestmentResults(data);
  const yearCount = itogData.length;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Годы</th>
          <th>Годовые итог</th>
          <th>Годовая доходность</th>
          <th>Общая доходность</th>
          <th>Вложенные деньги</th>
        </tr>
      </thead>
      <tbody>
        {itogData.map((element) => {
          const totalInterest =
            element.valueEndOfYear - element.annualInvestment * element.year;
          const totalAmountInvested = element.valueEndOfYear - totalInterest;
          return (
            <tr>
              <td>{element.year}</td>
              <td>{formatter.format(element.valueEndOfYear)}</td>
              <td>{formatter.format(element.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
