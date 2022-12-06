import * as C from "./styles";
import { Categories } from "../../data";

interface Props {
  label: string;
  value: string;
  onChange: (e: any) => void;
}

export default function SelectCategory({ label, value, onChange }: Props) {
  const categoriesKeys = Object.keys(Categories);

  return (
    <C.Container>
      <C.ContainerLabel>
        <C.Label>{label}</C.Label>
      </C.ContainerLabel>
      <C.Select value={value} onChange={onChange}>
        <option></option>
        {categoriesKeys.map((key, index) => (
          <option key={index} value={key}>
            {Categories[key].title}
          </option>
        ))}
      </C.Select>
    </C.Container>
  );
}
