import "../../scss/Tags/Tag.scss";
import { TagListItem } from "../Tags/TagListItem.js";

export const Tag = ({ hospitalTag, tagToggle }) => {
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
