import React from "react";
import "../../scss/modal.css";

// import ImageButton from "react-image-button";    오류
export const ModalHospital = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    // 클래스 이름 변경
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <ImageButton img="../../scss/star_86960.ico"> */}
            <button className="close" onClick={close}>
              즐겨찾기
            </button>

            {/* </ImageButton> */}
          </header>
          <main>
            운영시간 : <p />
            <br />
            진료과목 : <p />
            <br />
            주소 : <p />
            <br />
            전화번호 : <p />
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
