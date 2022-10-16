import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import "../../scss/Tags/TagListItem.scss";
import cn from "classnames";

export const TagListItem = ({ tagListItemTags, tagListItemToggle }) => {
  const { id, hos_Name, checked } = tagListItemTags;
  return (
    <div className="TagListItem_Main">
      <div
        className={cn("TagListItem_Checkbox", { checked })}
        onClick={() => tagListItemToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* checked에 따라 아이콘 달라짐 */}
        <div className="TagListItem_Hos_Name">{hos_Name}</div>
        {/* 병원 출력 */}
      </div>
    </div>
  );
};
