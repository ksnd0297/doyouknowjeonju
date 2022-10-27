import React from "react";
import { MdStarRate } from "react-icons/md";
import "../../scss/Bookmark/BookmarkListItem.scss";

export const BookmarkListItem = ({ bookmarkLists, bookmarkListsRemove }) => {
  const { id, hosName, address } = bookmarkLists;
  return (
    <div className="BookmarkListItem_Main">
      <div className="BookmarkListItem_Title">
        <div className="BokkmarkListItem_HosName">{hosName}</div>
        <div className="BookmarkListItem_Address">{address}</div>
      </div>
      <div
        className="BokkmarkListItem_Remove"
        onClick={() => bookmarkListsRemove(id)}
      >
        <MdStarRate />
      </div>
    </div>
  );
};
