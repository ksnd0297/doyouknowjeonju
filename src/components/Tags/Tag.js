import React, { useState, useCallback } from "react";
import "../../scss/Tags/Tag.scss";
import { TagListItem } from "./TagListItem";

export const Tag = () => {
  //키 값으로 쓸 Id, 병원 종류, 체크 유무로 구성된 객체 생성
  const [HospitalTag, SetHospitalTag] = useState([
    {
      Id: 1,
      Hos_Name: "내과",
      Checked: false,
    },
    {
      Id: 2,
      Hos_Name: "신경과",
      Checked: true,
    },
    {
      Id: 3,
      Hos_Name: "정신과",
      Checked: true,
    },
    {
      Id: 4,
      Hos_Name: "외과",
      Checked: true,
    },
    {
      Id: 5,
      Hos_Name: "안과",
      Checked: true,
    },
    {
      Id: 6,
      Hos_Name: "치과",
      Checked: true,
    },
    {
      Id: 7,
      Hos_Name: "이비인후과",
      Checked: true,
    },
    {
      Id: 8,
      Hos_Name: "산부인과",
      Checked: true,
    },
  ]);
  //태그 체크유무 변경 함수
  const Tag_Toggle = useCallback(
    (Id) => {
      SetHospitalTag(
        HospitalTag.map((Hos_Tag) =>
          Hos_Tag.Id === Id
            ? { ...Hos_Tag, Checked: !Hos_Tag.Checked }
            : Hos_Tag
        )
      );
    },
    [HospitalTag]
  );

  return (
    <div className="Tag_Main">
      <div className="Tag_Checkbox">
        {/* 체그박스 + 병원 이름 */}
        {HospitalTag.map((Tag) => (
          <TagListItem
            TagListItem_Tags={Tag}
            key={Tag.Id}
            TagListItem_Toggle={Tag_Toggle}
          />
        ))}
      </div>
    </div>
  );
};
