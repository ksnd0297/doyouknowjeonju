import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Search.scss";
import { Tag } from "../Tags/Tag.js";
import { Bookmark } from "../Bookmark/Bookmark.js";
import { Todo } from "../Todo/Todo.js";
import { Menu } from "../Menu/Menu.js";
import { Searchbar } from "./Searchbar";

//변수명 함수명 모두 카멜케이스로 바꾸기
//눌렀을 때 색 변하거나 테두리 생기는 등의 반응 주기
//좀 더 예쁘게 꾸미기
//Todo 체크되면 취소선
export const Search = () => {
  const [search, setSearch] = useState(""); //검색에 사용할 state
  const searchBar = (e) => {
    //검색에 사용할 함수. 아직 구현 중
    setSearch(e.target.value);
  };

  return (
    <div className="Search_main">
      <div className="Search_searchBar">
        <Searchbar />
      </div>
      <div className="Search_otherComponents">
        <div className="Search_menu">
          <Menu />
        </div>
        <div className="Search_tabs">
          <Bookmark />
        </div>
      </div>
    </div>
  );
};
