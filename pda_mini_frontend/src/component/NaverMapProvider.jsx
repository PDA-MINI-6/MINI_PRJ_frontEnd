import { createContext, useEffect, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const naverMapContext = createContext();

export default function NaverMapProvider({ children, category }) {
  let ready = useRef(false);
  let markers = useRef([]);
  const _map = useRef();
  let clickedMarker = useRef();
  // let prevClickedMarker = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/" || markers.current.length === 0) {
      if (clickedMarker.current !== undefined) {
        clickedMarker.current.setAnimation(0);
        clickedMarker.current = undefined;
      }
    } else {
      if (clickedMarker.current) {
        clickedMarker.current.setAnimation(null);
      }
      const temp = markers.current.find(
        (m) => m.id === Number(window.location.pathname.slice(1))
      ).marker;
      clickedMarker.current = temp;
      moveMap(temp);
    }
  }, [window.location.pathname, markers]);

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

  const moveMap = useCallback((m) => {
    m.setAnimation(1);
    // prevClickedMarker.current = clickedMarker.current;
    // markers.current.map((m, idx) => {
    // if (m.id === id) {
    _map.current.panTo(m.position, {
      duration: 500,
      easing: "linear",
    });
    // if (clickedMarker.current) {
    //   clickedMarker.current.setAnimation(null);
    // }
    // clickedMarker.current = m.marker;
    // clickedMarker.current.setAnimation(1);
    // }
    // });
  }, []);

  // const offAnimation = useCallback(() => {
  //   if (clickedMarker.current) {
  //     clickedMarker.current.setAnimation(0);
  //     clickedMarker.current = null;
  //   }
  // }, []);

  const initMarker = (data) => {
    if (markers.current.length !== 0) {
      markers.current.map((m) => {
        m.marker.map = _map.current;
      });

      return;
    }

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
        id: d.id,
      };

      window.naver.maps.Event.addListener(marker.marker, "click", () => {
        navigate(`/${d.id}`);
        // _map.current.panTo(marker.marker.position, {
        //   duration: 500,
        //   easing: "linear",
        // });

        // if (clickedMarker.current) {
        //   clickedMarker.current.setAnimation(0);
        //   prevClickedMarker.current = clickedMarker.current;
        // }
        // clickedMarker.current = marker.marker;
        // clickedMarker.current.setAnimation(1);
      });

      return marker;
    });

    if (window.location.pathname !== "/") {
      clickedMarker.current = markers.current.find(
        (m) => m.id === Number(window.location.pathname.slice(1))
      ).marker;
      clickedMarker.current.setAnimation(1);
    }

    // alert(window.location.pathname.slice(1));
  };

  return (
    <naverMapContext.Provider value={{ ready, initMap, moveMap, initMarker }}>
      {children}
    </naverMapContext.Provider>
  );
}
