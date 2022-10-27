import React from "react";
import "../../scss/Modal/modal.css";
import { MdStarRate } from "react-icons/md";
export const ModalParking = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, carIndex, parkingInfo, close, header, favorite } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    // 클래스 이름 변경
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={favorite}>
              <MdStarRate color="yellow" fontSize={20} />
            </button>
          </header>
          <main>
            주소 : {parkingInfo[carIndex].parkAddress}
            <p />
            <br />
            운영시간 : {parkingInfo[carIndex].parkOpenhour}
            <p />
            <br />
            주차 총 대수 : {parkingInfo[carIndex].parkSpace}
            <p />
            <br />
            가격 : {parkingInfo[carIndex].parkfee}
            <p />
            <br />
            최대가격 : {parkingInfo[carIndex].parkTopfee}
            <p />
            <br />
            전화번호 : {parkingInfo[carIndex].parkPhone}
            <p />
            <br />
            유료/무료주차장 : {parkingInfo[carIndex].parkNote}
            <p />
            <br />
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
