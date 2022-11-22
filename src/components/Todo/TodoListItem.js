import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../../scss/Todo/TodoListItem.scss";
import cn from "classnames";

export const TodoListItem = ({
  TodoListItems,
  todoListItemRemove,
  todoListItemToggle,
}) => {
  //받아온 state를 객체 형식으로 저장
  const { id, text, checked } = TodoListItems;
  return (
    <div className="TodoListItem_Items">
      {/* 체크박스 */}
      <div
        className={cn("TodoListItem_Checkbox", { checked })}
        onClick={() => todoListItemToggle(id)}
      >
        {/* checked 변수가 참인가 거짓인가에 따라 아이콘이 달라짐 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="TodoListItem_Text">{text}</div>
      </div>
      {/* TodoList 내역 중 원하는 것을 지울 수 있음 */}
      <div
        className="TodoListItem_Remove"
        onClick={() => todoListItemRemove(id)}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
