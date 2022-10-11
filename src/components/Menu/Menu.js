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
  const [Pages, SetPage] = useState([
    { Id: 1, Page_Name: "Tag", Checked: true },
    { Id: 2, Page_Name: "Bookmark", Checked: false },
    { Id: 3, Page_Name: "TodoList", Checked: false },
  ]);

  const MenuChange = useCallback(
    (Id) => {
      SetPage(
        Pages.map((Page) =>
          Page.Id === Id ? { ...Page, checked: true } : false
        )
      );
    },
    [Pages]
  );
  return (
    <div className="Menu_main">
      <div className="Menu_GoTag" onClick={MenuChange}>
        {Pages[0].Checked ? <MdLabel /> : <MdLabelOutline />}
      </div>
      <div className="Menu_GoBookmark" onClick={MenuChange}>
        {Pages[1].Checked ? <MdBookmarks /> : <MdBookmarkBorder />}
      </div>
      <div className="Menu_GoTodo" onClick={MenuChange}>
        {Pages[2].Checked ? <MdAssignment /> : <MdAssignmentTurnedIn />}
      </div>
    </div>
  );
};
