import React, { useState, useCallback } from "react";
import {
  MdBookmarks,
  MdBookmarkBorder,
  MdAssignment,
  MdAssignmentTurnedIn,
  MdLabel,
  MdLabelOutline,
} from "react-icons/md";
import "../../scss/Menu/Menu.scss";
import { Bookmark } from "../Bookmark/Bookmark";
import { Tag } from "../Tags/Tag";
import { Todo } from "../Todo/Todo";

export const Menu = () => {
  const [pages, setPage] = useState([
    { id: 1, Page_Name: "Tag", checked: true },
    { id: 2, Page_Name: "Bookmark", checked: false },
    { id: 3, Page_Name: "TodoList", checked: false },
  ]);

  const menuChange = useCallback(
    (id) => {
      setPage(
        pages.map((page) =>
          page.id === id ? { ...page, checked: true } : false
        )
      );
    },
    [pages]
  );
  return (
    <div className="Menu_main">
      <div className="Menu_goTag" onClick={menuChange}>
        {pages[0].checked ? <MdLabel /> : <MdLabelOutline />}
      </div>
      <div className="Menu_goBookmark" onClick={menuChange}>
        {pages[1].checked ? <MdBookmarks /> : <MdBookmarkBorder />}
      </div>
      <div className="Menu_goTodo" onClick={menuChange}>
        {pages[2].checked ? <MdAssignment /> : <MdAssignmentTurnedIn />}
      </div>
    </div>
  );
};
