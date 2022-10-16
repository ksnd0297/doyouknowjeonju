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
  const { id, text, checked } = TodoListItems;
  return (
    <div className="TodoListItem_Items">
      <div
        className={cn("TodoListItem_Checkbox", { checked })}
        onClick={() => todoListItemToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="TodoListItem_Text">{text}</div>
      </div>
      <div
        className="TodoListItem_Remove"
        onClick={() => todoListItemRemove(id)}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
