import React, { useState } from "react";

export const Bookmark = () => {
  const [Hospital, SetHospital] = useState([
    {
      id: 1,
      Name: "예시 병원",
      Address: "전라북도 전주시 어딘가",
    },
  ]);

  return <div className="Bookmark_Main">{/* 북마크 리스트 */}</div>;
};
