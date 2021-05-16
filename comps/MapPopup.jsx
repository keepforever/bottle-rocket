import { Popup } from 'react-map-gl';

const MapPopup = ({ restaurant, toggleShowPopup }) => (
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

export default MapPopup;
