import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import "../../scss/Tags/TagListItem.scss";

export const TagListItem = ({ tagListItemTags, tagListItemToggle }) => {
  const { id, hos_Name, checked } = tagListItemTags;
  return (
    <div className="TagListItem_main">
      <div
        className="TagListItem_checkbox"
        onClick={() => tagListItemToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* checked에 따라 아이콘 달라짐 */}
      </div>
      <div className="TagListItem_hos_Name">{hos_Name}</div>
      {/* 병원 출력 */}
    </div>
  );
};
