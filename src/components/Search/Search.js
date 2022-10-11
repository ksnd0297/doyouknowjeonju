import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Search.scss";
import { Tag } from "../Tags/Tag.js";
import { Bookmark } from "../Bookmark/Bookmark.js";
import { Todo } from "../Todo/Todo.js";
import { Menu } from "../Menu/Menu.js";

//변수명 함수명 모두 카멜케이스로 바꾸기
//눌렀을 때 색 변하거나 테두리 생기는 등의 반응 주기
//좀 더 예쁘게 꾸미기
//Todo 체크되면 취소선
export const Search = () => {
  const [Search, SetSearch] = useState(""); //검색에 사용할 state
  const SearchBar = (e) => {
    //검색에 사용할 함수. 아직 구현 중
    SetSearch(e.target.value);
  };

  return (
    <div className="Search_Main">
      <div className="Search_SearchBar">
        <input type="text" value={Search} onChange={SearchBar} />
        <button type="submit" className="Search_Button">
          <MdSearch />
        </button>
      </div>
      <div className="Search_OtherComponents">
        <div className="Search_Menu">
          <Menu />
        </div>
        <div className="Search_Taps">
          {/* 스펠링 틀림 tab */}
          <Tag />
        </div>
      </div>
    </div>
  );
};
