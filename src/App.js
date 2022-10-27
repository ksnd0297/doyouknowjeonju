import React, { useState } from "react";
import { Map } from "./components/Map/Map";

import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(0);
  const [hosIndex, setHosIndex] = useState(0);
  const [carIndex, setCarIndex] = useState(0);

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
      </div>
    </div>
  );
}

export default App;
