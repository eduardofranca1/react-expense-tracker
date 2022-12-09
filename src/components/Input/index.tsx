import { ChangeEvent } from "react";
import * as C from "./styles";

interface Props {
  label: string;
  placeholder?: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type,
}: Props) {
  return (
    <C.Container>
      <C.Label>
        {label}
        <C.Input
          value={value}
          onChange={onChange}
          placeholder={placeholder ?? ""}
          type={type}
        ></C.Input>
      </C.Label>
    </C.Container>
  );
}
