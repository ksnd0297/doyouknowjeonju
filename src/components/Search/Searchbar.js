import React, { useState, useCallback } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Searchbar.scss";

export const Searchbar = ({ changeSearch }) => {
  //검색창에서 입력된 값이 담길 state
  const [value, setValue] = useState("");

  //입력된 값을 저장하는 함수, 검색창을 비우고 검색값을 search에 저장
  const targetToSearch = useCallback(
    (e) => {
      setValue("");
      changeSearch(value);
      e.preventDefault();
    },
    [changeSearch, value]
  );
  const searchInsert = (e) => {
    setValue(e.target.value);
  }; //맨 처음 랜더링때만 함수가 호출됨, value 값을 변경하는 함수
  return (
    <div className="Searchbar_Main">
      {/* 검색 버튼 */}
      <button
        type="submit"
        className="Searchbar_Button"
        onClick={targetToSearch}
      >
        <MdSearch />
      </button>
      {/* 검색창  */}
      <input
        type="text"
        className="Searchbar_Input"
        value={value}
        onChange={searchInsert}
      />
    </div>
  );
};
