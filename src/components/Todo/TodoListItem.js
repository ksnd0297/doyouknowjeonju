import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../../scss/Todo/TodoListItem.scss";
import cn from "classnames";

export const TodoListItem = ({
  TodoListItem_todo,
  TodoListItem_remove,
  TodoListItem_toggle,
}) => {
  const { id, text, checked } = TodoListItem_todo;
  return (
    <div className="TodoListItem_items">
      <div
        className={cn("TodoListItem_checkbox", { checked })}
        onClick={() => TodoListItem_toggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="TodoListItem_text">{text}</div>
      </div>
      <div
        className="TodoListItem_remove"
        onClick={() => TodoListItem_remove(id)}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
