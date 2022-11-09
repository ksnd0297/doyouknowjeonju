import React, { useState, useCallback, useRef, useEffect } from "react";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import axios from "axios";

import { Search } from "./components/Search/Search.js";

import { Map } from "./components/Map/Map";

import { ModalApp } from "./components/Modal/ModalApp";

import { Login } from "./components/Login/Login";

import { Register } from "./components/Register/Register";
import "./App.scss";

function App() {
  useEffect(() => {
    async function getInfo() {
      const hospital = await axios.get("http://124.51.137.122:8000/hospital");
      const carpark = await axios.get("http://124.51.137.122:8000/parking");
      settHospital(hospital.data);
      settCarpark(carpark.data);
      forceUpdate();
    }
    getInfo();
  }, []);

  // mainPage 결정 로직
  const [mainPage, setMainPage] = useState("main");

  // 강제 업데이트 로직
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  let [thosptial, settHospital] = useState([]);
  let [tcarpark, settCarpark] = useState([]);

  let hospital = thosptial;
  let carpark = tcarpark;

  /* SideBar 로직 */
  //버튼 누르면 Search 컴포넌트 안보이도록 만들기 위해 사용되는 state
  const [viewSearch, setViewSearch] = useState(true);

  //페이지 변환을 위해 사용할 객체
  const [pages, setPage] = useState("tag");

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

  //TodoList 내용 예시 1번은 짧은 메모, 2번은 긴 메모
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
  ]);

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

  //검색 state를 변경하는 함수, console.log는 값이 제대로 전달하는지 확인 용으로 넣음
  const searchBar = (TargetHospitalName) => {
    const targetHospital = hospital.filter(
      (value) => value.hosName === TargetHospitalName
    );
    setLatitude(targetHospital[0].hosLat);
    setLongitude(targetHospital[0].hosLng);
    console.log("검색 : ", targetHospital[0].hosName);
  };

  //Menu 컴포넌트에서 아이콘 누르면 여기서 pages 갱신
  const pageSelectButton = (name) => {
    setPage(name);
  };

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

  const bookmarkRemove = useCallback(
    //북마크 제거를 위해 만든 함수
    (id) => {
      setHospital(hospitals.filter((hospital) => hospital.id !== id));
    },
    [hospitals]
  );

  let Tag = [];
  hospitalTag.map((value) =>
    value.checked === true ? Tag.push(value.id - 1) : null
  );

  hospital = hospital.filter((value) => {
    for (let i = 0; i < Tag.length; i++) {
      if (value.hosSubject[Tag[i]] === "0") return false;
    }
    return true;
  });
  /* SideBar 로직 */

  /* Modal 로직 */
  const [modalOpen, setModalOpen] = useState(0);

  const closeModal = () => {
    setModalOpen(0);
  };

  const hospitalFavoriteToggle = (id, hosName, address) => {
    let nextHospitals = hospitals;
    nextHospitals.push({
      id: id,
      hosName: hosName,
      address: address,
    });
    setHospital(nextHospitals);
    forceUpdate();
    console.log("병원 즐겨찾기 toggle");
  };
  const parkingFavoriteToggle = (id, parkName, address) => {
    let nextParkings = hospitals;
    nextParkings.push({
      id: id,
      hosName: parkName,
      address: address,
    });
    setHospital(nextParkings);
    forceUpdate();
    console.log("주차장 즐겨찾기 toggle");
  };
  /* Modal 로직 */

  /* Map 로직 */
  // 경도 위도 데이터 저장
  const [latitude, setLatitude] = useState(35.824184);
  const [longitude, setLongitude] = useState(127.147976);

  const [hosIndex, setHosIndex] = useState(0);
  const [carIndex, setCarIndex] = useState(0);

  /* Map 로직 */

  return (
    <div className="App">
      {mainPage === "login" ? (
        <Login />
      ) : mainPage === "register" ? (
        <Register />
      ) : mainPage === "main" ? (
        <>
          <div className="aside">
            {viewSearch ? (
              <>
                <button
                  className="ShowSearch"
                  onClick={() => setViewSearch(!viewSearch)}
                >
                  <MdOutlineMenuOpen />
                </button>
                <Search
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
              </>
            ) : (
              <button
                className="ShowSearch"
                onClick={() => setViewSearch(!viewSearch)}
              >
                <MdOutlineMenuOpen />
              </button>
            )}
          </div>
          <div className="main">
            <Map
              setModalOpen={setModalOpen}
              setHosIndex={setHosIndex}
              setCarIndex={setCarIndex}
              hospital={hospital}
              carpark={carpark}
              latitude={latitude}
              longitude={longitude}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
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
        </>
      ) : null}
    </div>
  );
}

export default App;
