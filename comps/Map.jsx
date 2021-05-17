import { useRef, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HomeIcon } from '@heroicons/react/outline';
import MapPopup from './MapPopup';

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
            <HomeIcon className="h-8 w-8 fill-current text-green-500" />
          </button>
        </Marker>

        {showPopup && <MapPopup restaurant={restaurant} toggleShowPopup={toggleShowPopup} />}
      </ReactMapGL>
    </div>
  );
};

export default Map;
