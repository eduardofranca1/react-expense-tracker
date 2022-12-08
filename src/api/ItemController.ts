import axios from "axios";
import { Item } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

class ItemController {
  async create(item: Item) {
    try {
      const response = await api.post("/item", {
        title: item.title,
        category: item.category,
        date: item.date,
        value: item.value,
      });
      console.log(response);
    } catch (error: any) {
      alert(error.response.data.message[0]);
      console.log(error);
    }
  }

  async findAll() {
    try {
      const response = await api.get("/item");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteItem(id: string) {
    try {
      const response = await api.delete("/item", {
        params: { id },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ItemController();
