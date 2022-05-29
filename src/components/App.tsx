import React, { useRef } from "react";

import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";

function App() {
  const { todoList } = useTodo();

  const incompletedList = todoList.filter((todo: Todo) => !todo.done);
  const completedList = todoList.filter((todo: Todo) => todo.done);

  return (
    <div>
      <TodoTitle title="TODO List" as="h1" />
      <TodoList todoList={incompletedList} title="未完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} title="完了TODOリスト" as="h2" />
    </div>
  );
}

export default App
