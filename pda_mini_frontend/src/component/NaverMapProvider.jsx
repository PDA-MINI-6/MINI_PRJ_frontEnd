import { createContext, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const naverMapContext = createContext();

export default function NaverMapProvider({ children }) {
  let ready = useRef(false);
  let markers = useRef([]);
  const _map = useRef();
  let clickedMarker = useRef();
  const navigate = useNavigate();

  const initMap = useCallback((el) => {
    if (ready.current) return;
    console.log("init map");
    ready.current = true;
    const map = new window.naver.maps.Map(document.getElementById("popUpMap"), {
      center: {
        lat: 37.559771,
        lng: 126.942367,
      }, //지도의 중심 좌표!
      zoom: 13, //지도의 초기 줌 레벨
      minZoom: 7, //지도의 최소 줌 레벨
    });
    _map.current = map;

    // markers = markers.map((m) => {
    //   m.setMap(_map.current);
    //   return m;
    // });
  }, []);

  const moveMap = useCallback((newCenter) => {
    _map.current.updateBy(newCenter, 16);
    markers.map((m, idx) => {
      if (
        m.position._lat === newCenter.lat &&
        m.position._lng === newCenter.lng
      ) {
        if (clickedMarker.current) {
          clickedMarker.current.setAnimation(null);
        }
        clickedMarker.current = m;
        clickedMarker.current.setAnimation(1);
      }
    });
  }, []);

  const initMarker = (data) => {
    markers = data.map((d, idx) => {
      const marker = new window.naver.maps.Marker({
        position: {
          lat: d.location.lat,
          lng: d.location.lng,
        },
        map: _map.current,
      });

      window.naver.maps.Event.addListener(marker, "click", () => {
        navigate(`/${d.id}`);
        _map.current.panTo(marker.position, {
          duration: 500,
          easing: "linear",
        });

        if (clickedMarker.current) {
          clickedMarker.current.setAnimation(null);
        }
        clickedMarker.current = marker;
        clickedMarker.current.setAnimation(1);
      });

      return marker;
    });
  };

  return (
    <naverMapContext.Provider value={{ ready, initMap, moveMap, initMarker }}>
      {children}
    </naverMapContext.Provider>
  );
}
