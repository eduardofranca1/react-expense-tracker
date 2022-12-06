import { useState } from "react";
import { Categories } from "../../data";
import { Item } from "../../types";
import Button from "../Button";
import Input from "../Input";
import SelectCategory from "../SelectCategory";
import * as C from "./styles";

interface Props {
  onAddItem: (item: Item) => void;
}

export default function InsertArea({ onAddItem }: Props) {
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);

  let categoryKeys = Object.keys(Categories);

  const insertItem = () => {
    let newItem = {
      date: new Date(date),
      category: category,
      title: title,
      value: value,
    };

    let errors: string[] = [];

    if (isNaN(new Date(date).getTime())) errors.push("Invalid date");
    if (!categoryKeys.includes(category)) errors.push("Invalid category");
    if (title === "") errors.push("Ente a title");
    if (value < 0 || isNaN(value)) errors.push("Invalid value");

    if (errors.length > 0) alert(errors.join("\n"));
    else onAddItem(newItem);

    clearFields();
  };

  const clearFields = () => {
    setDate("");
    setCategory("");
    setTitle("");
    setValue(0);
  };

  return (
    <C.Container>
      <C.InsertAreaTitle>Insert an expense</C.InsertAreaTitle>
      <Input
        label={"Title:"}
        placeholder={"Enter a title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type={"text"}
      />
      <SelectCategory
        label={"Category:"}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        label={"Date:"}
        placeholder={"Enter the date"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type={"date"}
      />
      <Input
        label={"Value:"}
        placeholder={"Enter the value"}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        type={"number"}
      />
      <C.ButtonArea>
        <Button name={"Insert"} onClick={insertItem} />
      </C.ButtonArea>
    </C.Container>
  );
}
