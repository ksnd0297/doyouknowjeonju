import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import "../../scss/Tags/TagListItem.scss";

export const TagListItem = ({ TagListItem_Tags, TagListItem_Toggle }) => {
  const { Id, Hos_Name, Checked } = TagListItem_Tags;
  return (
    <div className="TagListItem_Main">
      <div
        className="TagListItem_Checkbox"
        onClick={() => TagListItem_Toggle(Id)}
      >
        {Checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* checked에 따라 아이콘 달라짐 */}
      </div>
      <div className="TagListItem_Hos_Name">{Hos_Name}</div>
      {/* 병원 출력 */}
    </div>
  );
};
