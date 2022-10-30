import React from "react";
import "../../scss/Modal/modal.css";
import { MdStarRate } from "react-icons/md";
// import ImageButton from "react-image-button";    오류
export const ModalHospital = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, hosIndex, hospitalInfo, close, header, favorite } = props;
  function hosparser(subject) {
    let str = "";
    if (subject[0] === "1") str += "내과 ";
    if (subject[1] === "1") str += "신경과 ";
    if (subject[2] === "1") str += "정신과 ";
    if (subject[3] === "1") str += "외과 ";
    if (subject[4] === "1") str += "안과 ";
    if (subject[5] === "1") str += "치과 ";
    if (subject[6] === "1") str += "이비인후과 ";
    if (subject[7] === "1") str += "산부인과 ";
    return str;
  }
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    // 클래스 이름 변경
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <ImageButton img="../../scss/star_86960.ico">*/}
            <button
              className="close"
              onClick={() =>
                favorite(hosIndex, header, hospitalInfo[hosIndex].hosAddress)
              }
            >
              <MdStarRate color="yellow" fontSize={20} />
            </button>
            {/* </ImageButton> */}
          </header>
          <main>
            진료과목 : {hosparser(hospitalInfo[hosIndex].hosSubject)}
            <p />
            <br />
            주소 : {hospitalInfo[hosIndex].hosAddress}
            <p />
            <br />
            전화번호 : {hospitalInfo[hosIndex].hosPhone}
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
