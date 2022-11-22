import React from "react";
import { MdStarRate } from "react-icons/md";
import "../../scss/Bookmark/BookmarkListItem.scss";

export const BookmarkListItem = ({ bookmarkLists, bookmarkListsRemove }) => {
  //Bookmark에서 가져온 Props 저장
  const { id, hosName, address } = bookmarkLists;
  return (
    <div className="BookmarkListItem_Main">
      <div className="BookmarkListItem_Title">
        {/* 병원 이름, 병원 주소 순서대로 출력 */}
        <div className="BokkmarkListItem_HosName">{hosName}</div>
        <div className="BookmarkListItem_Address">{address}</div>
      </div>
      <div
        className="BokkmarkListItem_Remove"
        //누르면 사라지도록 onclick 이벤트 설정
        onClick={() => bookmarkListsRemove(id)}
      >
        <MdStarRate />
      </div>
    </div>
  );
};
