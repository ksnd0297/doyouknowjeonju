//App.js에 넣을 예정이었으나 컴포넌트가 중첩으로 보이는 버그가 있어서 지금은 빼놓았음

import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { Search } from "../Search/Search.js";
export const Aside = (
  viewSearch,
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
  changeView
) => {
  return (
    <div>
      {viewSearch ? (
        <>
          <button className="closeSearch" onClick={changeView}>
            <MdOutlineMenu />
          </button>
          <Search
            search={search}
            searchBar={searchBar}
            pages={pages}
            pageSelectButton={pageSelectButton}
            hospitalTag={hospitalTag}
            tagToggle={tagToggle}
            todos={todos}
            todoTodoListInsert={todoTodoListInsert}
            todoRemove={todoRemove}
            todoToggle={todoToggle}
            hospitals={hospitals}
            bookmarkRemove={bookmarkRemove}
          />
        </>
      ) : (
        <button className="showSearch" onClick={changeView}>
          <MdOutlineMenuOpen />
        </button>
      )}
    </div>
  );
};
