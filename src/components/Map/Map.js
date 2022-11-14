import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "../../scss/Map/Map.scss";

const { kakao } = window;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Map = ({
  viewSearch,
  setModalOpen,
  setHosIndex,
  setCarIndex,
  hospital,
  carpark,
}) => {
  // 모달 변경 로직

  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const hospitalMarkerImageSrc =
    "https://png.pngtree.com/png-clipart/20211027/original/pngtree-red-heart-shaped-cross-icon-png-image_4185085.png";
  const carparkMarkerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png"; // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const [traffic, setTraffic] = useState(false);
  const [level, setLevel] = useState(3);

  const toggleTraffic = () => setTraffic(!traffic);

  useEffect(() => {
    kakao.maps.load(async () => {
      const mapContainer = document.getElementById("Main_Map");
      const mapOption = {
        center: new kakao.maps.LatLng(35.824184, 127.147976), // 지도의 중심좌표
        level: level, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
      function createMarker(position, title, image) {
        let marker = new kakao.maps.Marker({
          position: position,
          image: image,
          clickable: true,
          title: title,
        });
        return marker;
      }

      // 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
      function createMarkerImage(src, size, options) {
        const markerImage = new kakao.maps.MarkerImage(src, size, options);
        return markerImage;
      }

      const hospitalMarkers = [];
      createHospitalMarkers(map); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다

      const carparkMarkers = [];
      createCarparkMakers(map);

      // 병원 마커 생성 함수
      function createHospitalMarkers(map) {
        hospital.map((value, index) => {
          const imageSize = new kakao.maps.Size(50, 50),
            imageOptions = {
              spriteOrigin: new kakao.maps.Point(0, 0),
              spriteSize: new kakao.maps.Size(50, 50),
            };

          // 마커이미지와 마커를 생성합니다
          const markerImage = createMarkerImage(
            hospitalMarkerImageSrc,
            imageSize,
            imageOptions
          );

          // 병원 마커 생성
          const marker = createMarker(
            new kakao.maps.LatLng(
              parseFloat(value.hosLat),
              parseFloat(value.hosLng)
            ),
            value.hosName,
            markerImage
          );

          // 마커 지도에 등록
          marker.setMap(map);

          // 생성된 마커를 병원 마커 배열에 추가합니다
          hospitalMarkers.push(marker);
        });
      }

      function createCarparkMakers(map) {
        carpark.map((value, index) => {
          const imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {
              spriteOrigin: new kakao.maps.Point(10, 72),
              spriteSize: new kakao.maps.Size(36, 98),
            };

          const markerImage = createMarkerImage(
            carparkMarkerImageSrc,
            imageSize,
            imageOptions
          );

          const marker = createMarker(
            new kakao.maps.LatLng(value.parkLat, value.parkLng),
            value.parkName,
            markerImage
          );

          marker.setMap(map);
          carparkMarkers.push(marker);
        });
      }

      // carparkmaker 이벤트 등록 ( mouseover, mouseout, click )
      carparkMarkers.map((value, index) => {
        const iwContent = `<div style = "width : 150px; height : 30px; padding:5px; cursor:pointer; text-align:center; font-weight:bold;">${value.getTitle()}</div>`;
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
        });

        kakao.maps.event.addListener(value, "mouseover", function () {
          infowindow.open(map, value);
          console.log("Map : mouseover");
        });

        kakao.maps.event.addListener(value, "mouseout", function () {
          infowindow.close();
          console.log("Map : mouseout");
        });

        kakao.maps.event.addListener(value, "click", function () {
          setModalOpen(2);
          setCarIndex(index);
          console.log("Map : click");
        });
      });

      // hospitalmaker 이벤트 등록 ( mouseover, mouseout, click )
      hospitalMarkers.map((value, index) => {
        const iwContent = `<div style = "width : 150px; height : 30px; padding:5px; cursor:pointer; text-align:center; font-weight:bold;">${value.getTitle()}</div>`;
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
        });

        kakao.maps.event.addListener(value, "mouseover", function () {
          infowindow.open(map, value);
          console.log("Map : mouseover");
        });

        kakao.maps.event.addListener(value, "mouseout", function () {
          infowindow.close();
          console.log("Map : mouseout");
        });

        kakao.maps.event.addListener(value, "click", function () {
          setModalOpen(1);
          setHosIndex(index);
          const position = value.getPosition();
          map.setCenter(new kakao.maps.LatLng(position.Ma, position.La));
          map.setLevel(2, { animate: true });
          console.log("Map : click");
        });
      });

      // 줌 변경 이벤트 등록
      kakao.maps.event.addListener(map, "zoom_changed", function () {
        setLevel(map.getLevel());
        console.log("Map : zoom_changed");
      });

      // 지도 타입 생성 ( 지도 | 스카이뷰 )
      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 줌 컨트롤러 생성
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 교통정보 표시 여부
      traffic === true
        ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
        : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    });
  }, [traffic, hospital, viewSearch]);

  return (
    <MapContainer id="Main_Map">
      <div className="Main_Button">
        <button onClick={toggleTraffic}>교통정보</button>
      </div>
    </MapContainer>
  );
};
