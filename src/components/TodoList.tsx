import { TodoTitle } from "./TodoTitle";
// import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList = ({
  todoList,
  title,
  as,
}: {
  todoList: Todo[];
  title: string;
  as: string;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                {todo.content}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
