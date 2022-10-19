import React, { useState } from "react";
import { ModalApp } from "./components/Modal/ModalApp";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(2); //빆으로 빼기
  const hospitalInfo = [
    {
      name: "전주병원",
      clock: "10:00 ~ 17:00",
      category: "안과",
      address: "전라북도 전주시 완산구 중화산1동 한두평3길 13",
      number: "010-0000-0000",
    },
  ];
  const parkingInfo = [
    {
      name: "전주주차장",
      address: "전라북도 전주시 완산구 전주객사3길 37-5 KR",
      clock: "10:00 ~ 17:00",
      sum: "50대",
      price: "100000원",
      number: "010-0000-0000",
    },
  ];

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
          closeModal={closeModal}
          hospitalInfo={hospitalInfo[0]}
          parkingInfo={parkingInfo[0]}
          hospitalFavoriteToggle={hospitalFavoriteToggle}
          parkingFavoriteToggle={parkingFavoriteToggle}
        />
      </div>
    </div>
  );
}

export default App;
