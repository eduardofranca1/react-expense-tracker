import * as C from "./styles";

interface Props {
  onClick?: (e: any) => void;
  name: string;
}

export default function Button({ name, onClick }: Props) {
  return (
    <C.Container>
      <C.Button onClick={onClick}>{name}</C.Button>
    </C.Container>
  );
}
