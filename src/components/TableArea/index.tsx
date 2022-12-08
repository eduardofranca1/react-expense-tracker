import TableItem from "../TableItem";
import { Item } from "../../types";
import * as C from "./styles";

interface Props {
  list: Item[];
  onUpdate?: () => void;
}

export default function TableArea({ list, onUpdate }: Props) {
  list.sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
          <C.TableHeadColumn>Title</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Amount</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem onUpdate={onUpdate} key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
}
