import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../../scss/Search/Searchbar.scss";

export const Searchbar = () => {
  return (
    <div className="Searchbar_main">
      <button type="submit" className="Searchbar_button">
        <MdSearch />
      </button>
      <input type="text" className="Searchbar_input" />
    </div>
  );
};
