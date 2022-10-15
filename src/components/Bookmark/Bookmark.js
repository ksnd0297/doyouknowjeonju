import React, { useState } from "react";

export const Bookmark = () => {
  const [hospital, setHospital] = useState([
    {
      id: 1,
      name: "예시 병원",
      address: "전라북도 전주시 어딘가",
    },
  ]);

  return <div className="Bookmark_main">{/* 북마크 리스트 */}</div>;
};
