import { createContext, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const naverMapContext = createContext();

export default function NaverMapProvider({ children, category }) {
  let ready = useRef(false);
  let markers = useRef([]);
  const _map = useRef();
  let clickedMarker = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (category === "0") {
      if (markers) {
        markers.current.map((m) => {
          m.marker.setVisible(true);
        });
      }
      return;
    }

    markers.current.map((m) => {
      if (m.category !== category) {
        m.marker.setVisible(false);
      } else {
        m.marker.setVisible(true);
      }
    });
  }, [category]);

  const initMap = useCallback((el) => {
    if (ready.current) return;
    console.log("init map");
    ready.current = true;
    const map = new window.naver.maps.Map(document.getElementById("popUpMap"), {
      center: {
        lat: 37.54514318331212,
        lng: 127.05688996207206,
      }, //지도의 중심 좌표!
      zoom: 15, //지도의 초기 줌 레벨
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
    markers.current.map((m, idx) => {
      if (
        m.marker.position._lat === newCenter.lat &&
        m.marker.position._lng === newCenter.lng
      ) {
        if (clickedMarker.current) {
          clickedMarker.current.setAnimation(null);
        }
        clickedMarker.current = m.marker;
        clickedMarker.current.setAnimation(1);
      }
    });
  }, []);

  const initMarker = (data) => {
    markers.current = data.map((d, idx) => {
      const marker = {
        marker: new window.naver.maps.Marker({
          icon: {
            url: `/markerImg/${d.category}.png`,
            // size: new window.naver.maps.Size(, 500),
            scaledSize: new window.naver.maps.Size(18, 30),
          },
          position: {
            lat: d.location.lat,
            lng: d.location.lng,
          },
          map: _map.current,
        }),
        category: d.category,
      };

      // console.log(marker.icon.url);

      window.naver.maps.Event.addListener(marker.marker, "click", () => {
        navigate(`/${d.id}`);
        _map.current.panTo(marker.marker.position, {
          duration: 500,
          easing: "linear",
        });

        if (clickedMarker.current) {
          clickedMarker.current.setAnimation(null);
        }
        clickedMarker.current = marker.marker;
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
