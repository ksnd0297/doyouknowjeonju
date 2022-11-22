import { BookmarkListItem } from "./BookmarkListItem.js";
import "../../scss/Bookmark/Bookmark.scss";

export const Bookmark = ({ hospitals, bookmarkRemove }) => {
  return (
    <div className="Bookmark_Main">
      <div className="Bookmark_List">
        {/* map을 사용해서 하나씩 <BookmarkListItem>에 보내서 출력되도록 만들기 */}
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
