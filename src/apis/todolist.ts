import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3100/todolist";

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};