import React, { useState } from "react";
import "../../scss/Search/Search.scss";
import { Tag } from "../Tags/Tag.js";
import { Bookmark } from "../Bookmark/Bookmark.js";
import { Todo } from "../Todo/Todo.js";
import { Menu } from "../Menu/Menu.js";
import { Searchbar } from "./Searchbar";

//변수명 함수명 모두 카멜케이스로 바꾸기

export const Search = () => {
  // const [search, setSearch] = useState(""); //검색에 사용할 state
  // const searchBar = (e) => {
  //   //검색에 사용할 함수. 아직 구현 중
  //   setSearch(e.target.value);
  // };

  //페이지 변환을 위해 사용할 객체
  const [pages, setPage] = useState("tag");

  //Menu 컴포넌트에서 아이콘 누르면 여기서 pages 갱신
  const pageSelectButton = (name) => {
    setPage(name);
  };
  //Menu에서 넘어오는 name을 key값으로 하여 컴포넌트를 저장한 객체
  const selectComponent = {
    tag: <Tag />,
    bookmark: <Bookmark />,
    todo: <Todo />,
  };

  return (
    <div className="Search_Main">
      <div className="Search_SearchBar">
        <Searchbar />
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
