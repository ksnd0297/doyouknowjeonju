import React, { useState } from "react";
import { ModalApp } from "./components/Modal/ModalApp";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(0); //빆으로 빼기
  const openParkingModal = () => {
    setModalOpen(2);
  };
  const openHospitalModal = () => {
    setModalOpen(1);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  const hospitalFavoriteToggle = () => {
    console.log("병원 즐겨찾기 toggle");
  };
  const parkingFavoriteToggle = () => {
    console.log("주차장 즐겨찾기 toggle");
  };
  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside" />
      {/* 지도BBCCD  */}
      <div className="main">
        <ModalApp
          modalOpen={modalOpen}
          openHospitalModal={openHospitalModal}
          openParkingModal={openParkingModal}
          closeModal={closeModal}
          Modal_hospitalFavorite={hospitalFavoriteToggle}
          Modal_parkingFavorite={parkingFavoriteToggle}
        />
      </div>
    </div>
  );
}

export default App;
