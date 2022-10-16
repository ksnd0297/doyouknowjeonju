import React, { useState, useCallback } from "react";
import {
  MdBookmarks,
  MdBookmarkBorder,
  MdAssignment,
  MdContentPaste,
  MdLabel,
  MdLabelOutline,
} from "react-icons/md";
import "../../scss/Menu/Menu.scss";

export const Menu = () => {
  const [pages, setPage] = useState([
    { id: 1, Page_Name: "Tag", checked: false },
    { id: 2, Page_Name: "Bookmark", checked: false },
    { id: 3, Page_Name: "TodoList", checked: true },
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
        {pages[2].checked ? <MdAssignment /> : <MdContentPaste />}
      </div>
    </div>
  );
};
