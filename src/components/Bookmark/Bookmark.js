import React, { useState, useCallback } from "react";
import { BookmarkListItem } from "./BookmarkListItem.js";
import "../../scss/Bookmark/Bookmark.scss";

export const Bookmark = () => {
  const [hospitals, setHospital] = useState([
    //예시로 만든 객체 리스트
    {
      id: 1,
      hosName: "예시 병원",
      address: "전라북도 전주시 어딘가",
    },
    {
      id: 2,
      hosName: "전주시보건소",
      address: "전북 전주시 완산구 전라감영로 33 전주시보건소",
    },
  ]);
  const bookmarkRemove = useCallback(
    //북마크 제거를 위해 만든 함수
    (id) => {
      setHospital(hospitals.filter((hospital) => hospital.id !== id));
    },
    [hospitals]
  );

  return (
    <div className="Bookmark_Main">
      <div className="Bookmark_List">
        {hospitals.map((hospital) => (
          <BookmarkListItem
            bookmarkLists={hospital}
            key={hospital.id}
            bookmarkListsRemove={bookmarkRemove}
          />
        ))}
      </div>
    </div>
  );
};
