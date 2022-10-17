import "../../scss/Search/Search.scss";
import { Tag } from "../Tags/Tag.js";
import { Bookmark } from "../Bookmark/Bookmark.js";
import { Todo } from "../Todo/Todo.js";
import { Menu } from "../Menu/Menu.js";
import { Searchbar } from "./Searchbar";

export const Search = ({
  search,
  searchBar,
  pages,
  pageSelectButton,
  hospitalTag,
  tagToggle,
  todos,
  todoTodoListInsert,
  todoRemove,
  todoToggle,
  hospitals,
  bookmarkRemove,
}) => {
  //Menu에서 넘어오는 name을 key값으로 하여 컴포넌트를 저장한 객체
  const selectComponent = {
    tag: <Tag hospitalTag={hospitalTag} tagToggle={tagToggle} />,
    bookmark: (
      <Bookmark hospitals={hospitals} bookmarkRemove={bookmarkRemove} />
    ),
    todo: (
      <Todo
        todos={todos}
        todoTodoListInsert={todoTodoListInsert}
        todoRemove={todoRemove}
        todoToggle={todoToggle}
      />
    ),
  };

  return (
    <div className="Search_Main">
      <div className="Search_SearchBar">
        <Searchbar searchTartget={search} changeSearch={searchBar} />
      </div>
      <div className="Search_OtherComponents">
        <div className="Search_Menu">
          <Menu menuSelect={pageSelectButton} />
        </div>
        <div className="Search_Tabs">
          {pages && <div>{selectComponent[pages]}</div>}
        </div>
      </div>
    </div>
  );
};
