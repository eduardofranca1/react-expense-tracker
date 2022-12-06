import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

interface Props {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export default function InfoArea({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) {
  const handlePreviousMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
        <C.MonthTile>{formatCurrentMonth(currentMonth)}</C.MonthTile>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Revenues" value={income} />
        <ResumeItem title="Expenses" value={expense} />
        <ResumeItem
          title="Balance"
          value={income - expense}
          colorValue={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
}
