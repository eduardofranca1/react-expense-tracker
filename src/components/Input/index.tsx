import * as C from "./styles";

interface Props {
  label: string;
  placeholder?: string;
  value: any;
  onChange: (e: any) => void;
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
      <C.ContainerLabel>
        <C.Label>{label}</C.Label>
      </C.ContainerLabel>
      <C.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? ""}
        type={type}
      ></C.Input>
    </C.Container>
  );
}
