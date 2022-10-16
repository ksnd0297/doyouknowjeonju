import React from "react";
import "../../scss/modal.css";

export const ModalParking = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, favorite } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    // 클래스 이름 변경
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={favorite}>
              즐겨찾기
            </button>
          </header>
          <main>
            주소 : 전라북도 전주시 완산구 전주객사3길 37-5 KR <p />
            <br />
            운영시간 : 10:00 ~ 17:00 <p />
            <br />
            주차 총 대수 : 50대 <p />
            <br />
            가격 : 100000원 <p />
            <br />
            전화번호 : 010-0000-0000 <p />
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
