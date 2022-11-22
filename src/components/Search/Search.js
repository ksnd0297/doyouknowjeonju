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
  //return 에서 해당 key 값에 맞는 컴포넌트를 출력할 수 있음
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
        {/* 이곳은 검색창이 있는 공간 */}
        <Searchbar searchTartget={search} changeSearch={searchBar} />
      </div>
      <div className="Search_OtherComponents">
        <div className="Search_Menu">
          {/* 메뉴 기능들의 버튼이 이곳에 있음 */}
          <Menu menuSelect={pageSelectButton} />
        </div>
        <div className="Search_Tabs">
          {/* App.js에 있는 pages에 따라 selectComponent에 있는 컴포넌트 출력 */}
          {pages && <div>{selectComponent[pages]}</div>}
        </div>
      </div>
    </div>
  );
};
