import { round } from "../../helpers/dateFilter";
import * as C from "./styles";

interface Props {
  title: string;
  value: number;
  colorValue?: string;
}

export default function ResumeItem({ title, value, colorValue }: Props) {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={colorValue}>R$ {round(value)}</C.Info>
    </C.Container>
  );
}
