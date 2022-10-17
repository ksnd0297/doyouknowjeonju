import { TodoListItem } from "./TodoListItem.js";
import { TodoInsert } from "./TodoInsert.js";
import "../../scss/Todo/Todo.scss";

export const Todo = ({ todos, todoTodoListInsert, todoRemove, todoToggle }) => {
  return (
    <div className="Todo_Main">
      <div className="Todo_TodoInsert">
        <TodoInsert Todo_OnInsert={todoTodoListInsert} />
      </div>
      <div className="Todo_TodoList">
        {todos.map((todo) => (
          <TodoListItem
            TodoListItems={todo}
            key={todo.id}
            todoListItemRemove={todoRemove}
            todoListItemToggle={todoToggle}
          />
        ))}
      </div>
    </div>
  );
};
