import React, { useState, useCallback, useRef } from "react";
import { Search } from "./components/Search/Search.js";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { Map } from "./components/Map/Map";
import { ModalApp } from "./components/Modal/ModalApp";
import "./App.scss";

function App() {
  //버튼 누르면 Search 컴포넌트 안보이도록 만들기 위해 사용되는 state
  const [viewSearch, setViewSearch] = useState(false);

  const [search, setSearch] = useState(""); //검색에 사용할 state
  //검색 state를 변경하는 함수, console.log는 값이 제대로 전달하는지 확인 용으로 넣음
  const searchBar = (value) => {
    setSearch(value);
    console.log(value);
  };
  //페이지 변환을 위해 사용할 객체
  const [pages, setPage] = useState("tag");

  //Menu 컴포넌트에서 아이콘 누르면 여기서 pages 갱신
  const pageSelectButton = (name) => {
    setPage(name);
  };

  //키 값으로 쓸 id, 병원 종류, 체크 유무로 구성된 객체 생성
  const [hospitalTag, SetHospitalTag] = useState([
    {
      id: 1,
      hos_Name: "내과",
      checked: false,
    },
    {
      id: 2,
      hos_Name: "신경과",
      checked: false,
    },
    {
      id: 3,
      hos_Name: "정신과",
      checked: false,
    },
    {
      id: 4,
      hos_Name: "외과",
      checked: false,
    },
    {
      id: 5,
      hos_Name: "안과",
      checked: false,
    },
    {
      id: 6,
      hos_Name: "치과",
      checked: false,
    },
    {
      id: 7,
      hos_Name: "이비인후과",
      checked: false,
    },
    {
      id: 8,
      hos_Name: "산부인과",
      checked: false,
    },
  ]);
  //태그 체크유무 변경 함수
  const tagToggle = useCallback(
    (id) => {
      SetHospitalTag(
        hospitalTag.map((hos_Tag) =>
          hos_Tag.id === id
            ? { ...hos_Tag, checked: !hos_Tag.checked }
            : hos_Tag
        )
      );
    },
    [hospitalTag]
  );

  const [todos, setTodos] = useState([
    //입력된 TodoList를 관리하기 위해 선언
    //여기 부터는 TodoList 관리 파트
    {
      id: 1,
      text: "병원 예약 메모",
      checked: true,
    },
    {
      id: 2,
      text: "그 밖의 다른 메모 인데 아주 긴 경우를 테스트해보기 위해 넣어본 메모.",
      checked: false,
    },
  ]); //TodoList 내용 예시 1번은 짧은 메모, 2번은 긴 메모

  const nextId = useRef(3); //추가될 객체 순서
  const todoTodoListInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const todoRemove = useCallback(
    //투두리스트 제거를 위해 만든 함수
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const todoToggle = useCallback(
    //투두리스트 수정을 위해 만든 함수
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  //bookmark에서
  const [hospitals, setHospital] = useState([
    //예시로 만든 객체 리스트
    {
      id: 1,
      hosName: "예시 병원",
      address: "전라북도 전주시 어딘가",
    },
    {
      id: 2,
      hosName: "전주시보건소",
      address: "전북 전주시 완산구 전라감영로 33 전주시보건소",
    },
  ]);
  const bookmarkRemove = useCallback(
    //북마크 제거를 위해 만든 함수
    (id) => {
      setHospital(hospitals.filter((hospital) => hospital.id !== id));
    },
    [hospitals]
  );

  const [modalOpen, setModalOpen] = useState(0);
  const [hosIndex, setHosIndex] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  const closeModal = () => {
    setModalOpen(0);
  };
  const hospitalFavoriteToggle = () => {
    console.log("병원 즐겨찾기 toggle");
  };
  const parkingFavoriteToggle = () => {
    console.log("주차장 즐겨찾기 toggle");
  };
  const hospital = require("./data/hospital.json");
  const carpark = require("./data/carpark.json");

  return (
    <div className="App">
      {/* 왼쪽 카테고리 & 검색 부분 */}
      <div className="aside">
        {viewSearch ? (
          <Search
            search={search}
            searchBar={searchBar}
            pages={pages}
            pageSelectButton={pageSelectButton}
            hospitalTag={hospitalTag}
            tagToggle={tagToggle}
            todos={todos}
            todoTodoListInsert={todoTodoListInsert}
            todoRemove={todoRemove}
            todoToggle={todoToggle}
            hospitals={hospitals}
            bookmarkRemove={bookmarkRemove}
          />
        ): <button className="ShowSearch" onClick={() => setViewSearch(!viewSearch)}>
        <MdOutlineMenuOpen />
      </button>}
      </div>
      {/* 지도  */}
      <div className="main">
        <Map
          setModalOpen={setModalOpen}
          setHosIndex={setHosIndex}
          setCarIndex={setCarIndex}
          hospital={hospital}
          carpark={carpark}
        />
        <ModalApp
          modalOpen={modalOpen}
          closeModal={closeModal}
          hosIndex={hosIndex}
          carIndex={carIndex}
          hospitalInfo={hospital}
          parkingInfo={carpark}
          hospitalFavoriteToggle={hospitalFavoriteToggle}
          parkingFavoriteToggle={parkingFavoriteToggle}
        />
      </div>
    </div>
  );
}

export default App;
