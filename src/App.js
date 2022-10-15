import React from "react";
import { Search } from "./components/Search/Search.js";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside">
        <Search />
      </div>
      {/* 지도BBCCC  */}
      <div className="main" />
    </div>
  );
}

export default App;
