import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../../scss/Todo/TodoInsert.scss";

export const TodoInsert = ({ Todo_OnInsert }) => {
  const [value, setValue] = useState(""); //Todo에 입력된 값을 관리하기 위해 선언

  const changeTodoValue = useCallback((e) => {
    setValue(e.target.value);
  }, []); //맨 처음 랜더링때만 함수가 호출됨, value 값을 변경하는 함수

  const todoSubmit = useCallback(
    //새로운 투두리스트 값이 제출되었을 때, 함수와 Value 값이 변경될 때만 사용할 수 있도록 useCallback 사용
    (e) => {
      Todo_OnInsert(value);
      setValue("");
      e.preventDefault();
    },
    [Todo_OnInsert, value]
  );
  return (
    <form className="Todo_InsertForm" onSubmit={todoSubmit}>
      {/* 입력창 */}
      <input
        className="Todo_Insert"
        placeholder="내용 입력하는 곳"
        value={value}
        onChange={changeTodoValue}
      />
      {/* TodoList를 추가하는 버튼 */}
      <button type="submit" className="Todo_Button">
        <MdAdd />
      </button>
    </form>
  );
};
