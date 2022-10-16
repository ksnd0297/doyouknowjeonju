import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Searchbar.scss";

export const Searchbar = () => {
  return (
    <div className="Searchbar_Main">
      <button type="submit" className="Searchbar_Button">
        <MdSearch />
      </button>
      <input type="text" className="Searchbar_Input" />
    </div>
  );
};
