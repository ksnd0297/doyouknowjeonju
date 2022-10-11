import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../../scss/Todo/TodoInsert.scss";

export const TodoInsert = ({ Todo_OnInsert }) => {
  const [Value, SetValue] = useState(""); //Todo에 입력된 값을 관리하기 위해 선언

  const Todo_ChangeValue = useCallback((e) => {
    SetValue(e.target.value);
  }, []); //맨 처음 랜더링때만 함수가 호출됨, value 값을 변경하는 함수

  const Todo_Submit = useCallback(
    //새로운 투두리스트 값이 제출되었을 때, 함수와 Value 값이 변경될 때만 사용할 수 있도록 useCallback 사용
    (e) => {
      Todo_OnInsert(Value);
      SetValue("");
      e.preventDefault();
    },
    [Todo_OnInsert, Value]
  );
  return (
    <form className="Todo_InsertForm" onSubmit={Todo_Submit}>
      <input
        className="Todo_Insert"
        placeholder="내용 입력하는 곳"
        value={Value}
        onChange={Todo_ChangeValue}
      />
      <button type="submit" className="Todo_Button">
        <MdAdd />
      </button>
    </form>
  );
};
