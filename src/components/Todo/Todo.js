import React, { useRef, useCallback, useState } from "react";
import { TodoListItem } from "./TodoListItem.js";
import { TodoInsert } from "./TodoInsert.js";
import "../../scss/Todo/Todo.scss";

export const Todo = () => {
  const [Todos, SetTodos] = useState([
    //입력된 TodoList를 관리하기 위해 선언
    //여기 부터는 TodoList 관리 파트
    {
      Id: 1,
      text: "병원 예약 메모",
      checked: true,
    },
    {
      Id: 2,
      text: "그 밖의 다른 메모 인데 아주 긴 경우를 테스트해보기 위해 넣어본 메모.",
      checked: false,
    },
  ]); //TodoList 내용 예시 1번은 짧은 메모, 2번은 긴 메모

  const NextId = useRef(3); //추가될 객체 순서
  const Todo_TodoListInsert = useCallback(
    (text) => {
      const Todo = {
        Id: NextId.current,
        text,
        checked: false,
      };
      SetTodos(Todos.concat(Todo));
      NextId.current += 1;
    },
    [Todos]
  );

  const Todo_Remove = useCallback(
    //투두리스트 제거를 위해 만든 함수
    (Id) => {
      SetTodos(Todos.filter((Todo) => Todo.Id !== Id));
    },
    [Todos]
  );

  const Todo_Toggle = useCallback(
    //투두리스트 수정을 위해 만든 함수
    (Id) => {
      SetTodos(
        Todos.map((Todo) =>
          Todo.Id === Id ? { ...Todo, checked: !Todo.checked } : Todo
        )
      );
    },
    [Todos]
  );

  return (
    <div className="Todo_Main">
      <div className="Todo_TodoInsert">
        <TodoInsert Todo_OnInsert={Todo_TodoListInsert} />
      </div>
      <div className="Todo_TodoList">
        {Todos.map((Todo) => (
          <TodoListItem
            TodoListItem_Todo={Todo}
            key={Todo.Id}
            TodoListItem_Remove={Todo_Remove}
            TodoListItem_Toggle={Todo_Toggle}
          />
        ))}
      </div>
    </div>
  );
};
