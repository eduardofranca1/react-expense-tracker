import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Categories } from "./data";
import { Item } from "./types";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import InsertArea from "./components/InsertArea";
import ItemController from "./api/ItemController";

export default function App() {
  const [listItems, setListItems] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await ItemController.findAll();
        setListItems(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [update]);

  useEffect(() => {
    setFilteredList(filterListByMonth(listItems, currentMonth));
  }, [listItems, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (Categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* ÁREA 1 - INFORMAÇÕES */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* ÁREA 2 - INSERÇÃO (INSERIR INFORMAÇÕES) */}
        <InsertArea onAddItem={() => setUpdate(!update)} />

        {/* ÁREA 3 - TABLE DE ITENS */}
        <TableArea list={filteredList} onUpdate={() => setUpdate(!update)} />
      </C.Body>
    </C.Container>
  );
}
