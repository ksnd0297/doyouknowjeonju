import React from "react";
import { ModalHospital } from "./ModalHospital";
import { ModalParking } from "./ModalParking";

export function ModalApp(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const {
    modalOpen,
    openParkingModal,
    openHospitalModal,
    closeModal,
    Modal_hospitalFavorite,
    Modal_parkingFavorite,
  } = props;

  console.log(modalOpen); //console 출력
  return (
    <React.Fragment>
      <button onClick={openHospitalModal}>병원 마크</button>
      <button onClick={openParkingModal}>주차 마크</button>
      {modalOpen === 1 ? (
        <ModalHospital
          open={modalOpen}
          close={closeModal}
          favorite={Modal_hospitalFavorite}
          header="전주 병원"
        />
      ) : null}
      {modalOpen === 2 ? (
        <ModalParking
          open={modalOpen}
          close={closeModal}
          favorite={Modal_parkingFavorite}
          header="전주 주차장"
        />
      ) : null}
    </React.Fragment>
  );
}
