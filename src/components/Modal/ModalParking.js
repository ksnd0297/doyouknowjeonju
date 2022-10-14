import React from "react";
import "../../scss/modal.css";

export const ModalParking = (props) => {
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
            <button className="close" onClick={close}>
              {/*X표시*/}
              &times;
            </button>
          </header>
          <main>
            주소 : <p />
            <br />
            운영시간 : <p />
            <br />
            주차 총 대수 : <p />
            <br />
            가격 : <p />
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
