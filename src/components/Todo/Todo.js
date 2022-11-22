import { TodoListItem } from "./TodoListItem.js";
import { TodoInsert } from "./TodoInsert.js";
import "../../scss/Todo/Todo.scss";

export const Todo = ({ todos, todoTodoListInsert, todoRemove, todoToggle }) => {
  return (
    <div className="Todo_Main">
      {/* TodoList 입력하는 곳 */}
      <div className="Todo_TodoInsert">
        <TodoInsert Todo_OnInsert={todoTodoListInsert} />
      </div>
      {/* TodoList 출력되는 곳, map을 사용하여 TodoListItem에 하나씩 값을 전달 */}
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
