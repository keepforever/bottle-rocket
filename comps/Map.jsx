import { useRef, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MyPopup = ({ restaurant, toggleShowPopup }) => (
  <Popup
    latitude={restaurant?.location?.lat}
    longitude={restaurant?.location?.lng}
    onClose={toggleShowPopup}
    closeOnClick={true}
    offsetTop={-10}
  >
    <div className="px-2">
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
);

const Map = ({ restaurant, isFull = false }) => {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: restaurant?.location?.lat,
    longitude: restaurant?.location?.lng,
    zoom: 10,
  });

  const toggleShowPopup = () => {
    setShowPopup((b) => !b);
  };

  return (
    <div className="text-black relative">
      <ReactMapGL
        {...viewport}
        width="100%"
        height={isFull ? 'calc(100vh - 64px)' : '325px'}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/keepforever/ckorcscny3jm718pq6xwbrfvx"
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
            {/* <img src="/tab_lunch@2x.png" className="w-8" alt="selected restaurant" />
             */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
        </Marker>

        {showPopup && <MyPopup restaurant={restaurant} toggleShowPopup={toggleShowPopup} />}
      </ReactMapGL>
    </div>
  );
};

export default Map;
