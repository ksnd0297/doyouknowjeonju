import React from "react";
import "../../scss/modal.css";
import { MdStarRate } from "react-icons/md";
// import ImageButton from "react-image-button";    오류
export const ModalHospital = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, hospitalInfo, close, header, favorite } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    // 클래스 이름 변경
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <ImageButton img="../../scss/star_86960.ico">*/}
            <button className="close" onClick={favorite}>
              <MdStarRate color="yellow" fontSize={20} />
            </button>
            {/* </ImageButton> */}
          </header>
          <main>
            운영시간 : {hospitalInfo.clock}
            <p />
            <br />
            진료과목 : {hospitalInfo.category}
            <p />
            <br />
            주소 : {hospitalInfo.address}
            <p />
            <br />
            전화번호 : {hospitalInfo.number}
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
