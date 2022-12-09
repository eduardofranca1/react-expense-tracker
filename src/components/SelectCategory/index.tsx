import * as C from "./styles";
import { Categories } from "../../data";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectCategory({ label, value, onChange }: Props) {
  const categoriesKeys = Object.keys(Categories);

  return (
    <C.Container>
      <C.Label>
        {label}
        <C.Select value={value} onChange={onChange}>
          <option></option>
          {categoriesKeys.map((key, index) => (
            <option key={index} value={key}>
              {Categories[key].title}
            </option>
          ))}
        </C.Select>
      </C.Label>
    </C.Container>
  );
}
