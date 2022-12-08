import { useState } from "react";
import ItemController from "../../api/ItemController";
import { Categories } from "../../data";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types";
import * as C from "./styles";

interface Props {
  item: Item;
  onUpdate?: () => void;
}

export default function TableItem({ item, onUpdate }: Props) {
  const removeItem = async (id: string) => {
    try {
      await ItemController.deleteItem(id);
      onUpdate && onUpdate();
    } catch (error) {
      console.log(error);
    }
  };

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
      <C.TableColumn>
        <C.DeleteButton onClick={() => removeItem(item.id!)}>🗑️</C.DeleteButton>
      </C.TableColumn>
    </C.TableLine>
  );
}
