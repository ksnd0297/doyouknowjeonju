import React, { useState } from "react";
import { Modal_App } from "./components/Modal/Modal_App";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(false); //빆으로 빼기

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside" />
      {/* 지도BBCCD  */}
      <div className="main">
        <Modal_App
          modalOpen={modalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}

export default App;
