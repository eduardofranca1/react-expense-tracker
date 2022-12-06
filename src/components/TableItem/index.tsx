import { Categories } from "../../data";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types";
import * as C from "./styles";

interface Props {
  item: Item;
}

export default function TableItem({ item }: Props) {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={Categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
}
