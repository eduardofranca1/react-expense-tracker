import { Item } from "../types";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  let listWithDateFormated: Item[] = [];

  list.map((listMap) => {
    listWithDateFormated.push({
      id: listMap.id,
      category: listMap.category,
      date: new Date(listMap.date),
      title: listMap.title,
      value: listMap.value,
    });
  });

  for (let i in listWithDateFormated) {
    if (
      listWithDateFormated[i].date.getFullYear() === parseInt(year) &&
      listWithDateFormated[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(listWithDateFormated[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${month}/${year}`;
};

const addZeroToDate = (day: number): string =>
  day < 10 ? `0${day}` : `${day}`;

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
};

export const round = (value: number) => {
  const round = Math.round(value * 100);
  return round / 100;
};
