import React from "react";
import ModalApp from "./components/Modal/Modal_App";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside" />
      {/* 지도BBCCD  */}
      <div className="main">
        <ModalApp />
      </div>
    </div>
  );
}

export default App;
