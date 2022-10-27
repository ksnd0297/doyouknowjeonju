import { BookmarkListItem } from "./BookmarkListItem.js";
import "../../scss/Bookmark/Bookmark.scss";

export const Bookmark = ({ hospitals, bookmarkRemove }) => {
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
