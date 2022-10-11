import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../../scss/Todo/TodoListItem.scss";

export const TodoListItem = ({
  TodoListItem_Todo,
  TodoListItem_Remove,
  TodoListItem_Toggle,
}) => {
  const { Id, text, checked } = TodoListItem_Todo;
  return (
    <div className="TodoListItem_Items">
      <div
        className="TodoListItem_Checkbox"
        onClick={() => TodoListItem_Toggle(Id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <div
        className="TodoListItem_Remove"
        onClick={() => TodoListItem_Remove(Id)}
      >
        <MdRemoveCircleOutline />
      </div>
      <div className="TodoListItem_Text">{text}</div>
    </div>
  );
};
