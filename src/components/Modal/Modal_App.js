import React, { useState } from "react";
import { Modal } from "./Modal";

export function Modal_App(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const { modalOpen, openModal, closeModal } = props;

  console.log(modalOpen);
  return (
    <React.Fragment>
      <button onClick={openModal}>병원 마크</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        운영시간 : <p />
        <br />
        진료과목 : <p />
        <br />
        주소 : <p />
        <br />
        전화번호 : <p />
        <br />
      </Modal>
    </React.Fragment>
  );
}
