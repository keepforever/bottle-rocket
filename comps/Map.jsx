import { useRef, useState } from 'react';
import Link from 'next/link';
import ReactMapGL, { Marker, Popup, ViewState } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { SearchBox } from "./searchBox";

const Map = ({ restaurant }) => {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: restaurant?.location?.lat,
    longitude: restaurant?.location?.lng,
    zoom: 10,
  });

  console.log('\n', '\n', `viewport = `, viewport, '\n', '\n');

  const toggleShowPopup = () => {
    setShowPopup((b) => !b);
  };

  return (
    <div className="text-black relative">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="calc(100vh - 64px)"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
      >
        <Marker
          latitude={restaurant?.location?.lat}
          longitude={restaurant?.location?.lng}
          offsetLeft={-15}
          offsetTop={-15}
        >
          <button
            onClick={toggleShowPopup}
            type="button"
            style={{ width: '30px', height: '30px', fontSize: '30px' }}
          >
            <img src="/tab_lunch@2x.png" className="w-8" alt="selected restaurant" />
          </button>
        </Marker>

        {showPopup && (
          <Popup
            latitude={restaurant?.location?.lat}
            longitude={restaurant?.location?.lng}
            onClose={toggleShowPopup}
            closeOnClick={true}
            offsetTop={-10}
          >
            <div className="">
              <div
                restaurant-name={restaurant.name}
                className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
              >
                <img
                  src={restaurant.backgroundImageURL}
                  alt={restaurant.name}
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button
                  restaurant-name={restaurant.name}
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {restaurant.name}</span>
                </button>
              </div>
              <p
                restaurant-name={restaurant.name}
                className="mt-2 block text-lg font-medium text-gray-900 truncate pointer-events-none"
              >
                {restaurant.name}
              </p>
              <p
                restaurant-name={restaurant.name}
                className="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                {restaurant.category}
              </p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
