import React from "react";
import "../../scss/modal.css";
import { MdStarRate } from "react-icons/md";
export const ModalParking = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, parkingInfo, close, header, favorite } = props;

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
            주소 : {parkingInfo.address}
            <p />
            <br />
            운영시간 : {parkingInfo.clock}
            <p />
            <br />
            주차 총 대수 : {parkingInfo.sum}
            <p />
            <br />
            가격 : {parkingInfo.price}
            <p />
            <br />
            전화번호 : {parkingInfo.number}
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
