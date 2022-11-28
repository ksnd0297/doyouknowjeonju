import React, { useState, useCallback } from "react";
import {
  MdBookmarks,
  //MdBookmarkBorder,
  MdAssignment,
  //MdContentPaste,
  MdLabel,
  //MdLabelOutline,
} from "react-icons/md";
import "../../scss/Menu/Menu.scss";

export const Menu = ({ menuSelect }) => {
  return (
    <div className="Menu_Main">
      <div className="Menu_GoTag" onClick={() => menuSelect("tag")}>
        <MdLabel />
      </div>
      <div className="Menu_GoBookmark" onClick={() => menuSelect("bookmark")}>
        <MdBookmarks />
      </div>
      <div className="Menu_GoTodo" onClick={() => menuSelect("todo")}>
        <MdAssignment />
      </div>
    </div>
  );
};
