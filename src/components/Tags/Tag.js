import React, { useState, useCallback } from "react";
import "../../scss/Tags/Tag.scss";
import { TagListItem } from "../Tags/TagListItem.js";

export const Tag = () => {
  //키 값으로 쓸 id, 병원 종류, 체크 유무로 구성된 객체 생성
  const [hospitalTag, SetHospitalTag] = useState([
    {
      id: 1,
      hos_Name: "내과",
      checked: false,
    },
    {
      id: 2,
      hos_Name: "신경과",
      checked: false,
    },
    {
      id: 3,
      hos_Name: "정신과",
      checked: false,
    },
    {
      id: 4,
      hos_Name: "외과",
      checked: false,
    },
    {
      id: 5,
      hos_Name: "안과",
      checked: false,
    },
    {
      id: 6,
      hos_Name: "치과",
      checked: false,
    },
    {
      id: 7,
      hos_Name: "이비인후과",
      checked: false,
    },
    {
      id: 8,
      hos_Name: "산부인과",
      checked: false,
    },
  ]);
  //태그 체크유무 변경 함수
  const tagToggle = useCallback(
    (id) => {
      SetHospitalTag(
        hospitalTag.map((hos_Tag) =>
          hos_Tag.id === id
            ? { ...hos_Tag, checked: !hos_Tag.checked }
            : hos_Tag
        )
      );
    },
    [hospitalTag]
  );

  return (
    <div className="Tag_Main">
      <div className="Tag_Checkbox">
        {/* 체그박스 + 병원 이름 */}
        {hospitalTag.map((tag) => (
          <TagListItem
            tagListItemTags={tag}
            key={tag.id}
            tagListItemToggle={tagToggle}
          />
        ))}
      </div>
    </div>
  );
};
