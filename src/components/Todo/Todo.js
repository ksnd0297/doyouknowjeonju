import React, { useRef, useCallback, useState } from "react";
import { TodoListItem } from "./TodoListItem.js";
import { TodoInsert } from "./TodoInsert.js";
import "../../scss/Todo/Todo.scss";

export const Todo = () => {
  const [todos, setTodos] = useState([
    //입력된 TodoList를 관리하기 위해 선언
    //여기 부터는 TodoList 관리 파트
    {
      id: 1,
      text: "병원 예약 메모",
      checked: true,
    },
    {
      id: 2,
      text: "그 밖의 다른 메모 인데 아주 긴 경우를 테스트해보기 위해 넣어본 메모.",
      checked: false,
    },
  ]); //TodoList 내용 예시 1번은 짧은 메모, 2번은 긴 메모

  const nextId = useRef(3); //추가될 객체 순서
  const todo_TodoListInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const todo_Remove = useCallback(
    //투두리스트 제거를 위해 만든 함수
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const todo_Toggle = useCallback(
    //투두리스트 수정을 위해 만든 함수
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="Todo_main">
      <div className="Todo_todoInsert">
        <TodoInsert Todo_OnInsert={todo_TodoListInsert} />
      </div>
      <div className="Todo_todoList">
        {todos.map((todo) => (
          <TodoListItem
            TodoListItem_todo={todo}
            key={todo.id}
            TodoListItem_remove={todo_Remove}
            TodoListItem_toggle={todo_Toggle}
          />
        ))}
      </div>
    </div>
  );
};
