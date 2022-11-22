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
      {/* onclick 이벤트를 통해 클릭할 때마다 담기는 값이 변경되도록 함. 변경되는 것은 pages state임
      변경된 값은 Search에 적용되어 나타남 */}
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
