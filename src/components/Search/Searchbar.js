import React, { useState, useCallback } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Searchbar.scss";

export const Searchbar = ({ changeSearch }) => {
  const [value, setValue] = useState("");
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
      <button
        type="submit"
        className="Searchbar_Button"
        onClick={targetToSearch}
      >
        <MdSearch />
      </button>
      <input
        type="text"
        className="Searchbar_Input"
        value={value}
        onChange={searchInsert}
      />
    </div>
  );
};
