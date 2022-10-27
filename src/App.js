import React, { useState } from "react";
import { Map } from "./components/Map/Map";
import { ModalApp } from "./components/Modal/ModalApp";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(0);
  const [hosIndex, setHosIndex] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  const closeModal = () => {
    setModalOpen(0);
  };
  const hospitalFavoriteToggle = () => {
    console.log("병원 즐겨찾기 toggle");
  };
  const parkingFavoriteToggle = () => {
    console.log("주차장 즐겨찾기 toggle");
  };
  const hospital = require("./data/hospital.json");
  const carpark = require("./data/carpark.json");

  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside" />
      {/* 지도  */}
      <div className="main">
        <Map
          setModalOpen={setModalOpen}
          setHosIndex={setHosIndex}
          setCarIndex={setCarIndex}
          hospital={hospital}
          carpark={carpark}
        />
        <ModalApp
          modalOpen={modalOpen}
          closeModal={closeModal}
          hosIndex={hosIndex}
          carIndex={carIndex}
          hospitalInfo={hospital}
          parkingInfo={carpark}
          hospitalFavoriteToggle={hospitalFavoriteToggle}
          parkingFavoriteToggle={parkingFavoriteToggle}
        />
      </div>
    </div>
  );
}

export default App;
