import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutList from '../comps/LayoutList';
import FailedToLoad from '../comps/FailedToLoad';
import Map from '../comps/Map';

const DetailSidebar = ({ selectedRestaurant = {} }) => {
  const displayInfo = {
    city: selectedRestaurant.location.city,
    address: selectedRestaurant.location.address,
    'Cross Street': selectedRestaurant.location.crossStreet,
  };
  return (
    <aside className="w-full bg-white md:p-8 overflow-y-auto">
      <div className="hidden md:block pb-16 space-y-6">
        <div>
          <div className="block w-full aspect-w-7 aspect-h-4 rounded-lg overflow-hidden">
            <img src={selectedRestaurant.backgroundImageURL} alt="" className="object-cover" />
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {selectedRestaurant.name}
              </h2>
              <p className="text-sm font-medium text-gray-500">{selectedRestaurant.category}</p>
            </div>
            <button
              type="button"
              className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* <HeartIcon className="h-6 w-6" aria-hidden="true" /> */}
              <span>Heart</span>
              <span className="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Information</h3>
          <dl className="mt-2 border-gray-200 divide-y divide-gray-200">
            {Object.keys(displayInfo).map((key) => (
              <div key={key} className="py-3 flex justify-between text-sm font-medium">
                <dt className="text-gray-500">{key}</dt>
                <dd className="text-gray-900">{displayInfo[key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="md:hidden h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div className="relative flex-1">
          <div className="pb-16 space-y-6">
            <div>
              <div className="block w-full rounded-lg" style={{ maxHeight: '400px' }}>
                <Map restaurant={selectedRestaurant} />
              </div>
              <div className="flex items-start justify-between bg-green-400 p-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-100">
                    <span className="sr-only">Details for </span>
                    {selectedRestaurant.name}
                  </h2>
                  <p className="text-md font-light text-gray-200">{selectedRestaurant.category}</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <dl className="mt-2 border-gray-200 divide-y divide-gray-200">
                {Object.keys(displayInfo).map((key) => (
                  <div key={key} className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="text-gray-900">{displayInfo[key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Detail = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [fetchError, setFetchError] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      let resp = null;
      try {
        resp = await axios.get(`/api/restaurants`);
        setRestaurants(resp?.data || []);
        setSelectedRestaurant(resp?.data?.[0]?.name || '');
        setIsLoading(false);
      } catch (error) {
        setFetchError(true);
        setIsLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (fetchError)
    return (
      <LayoutList title="Detail Page">
        <FailedToLoad />
      </LayoutList>
    );

  const currentRestaurant = restaurants.find((r) => r.name === selectedRestaurant);

  return (
    <LayoutList>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full pb-4" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <DetailSidebar selectedRestaurant={currentRestaurant} />
        </div>
        <div
          className="hidden w-full md:block"
          style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'scroll' }}
        >
          <Map restaurant={currentRestaurant} isFull />
        </div>
      </div>
    </LayoutList>
  );
};

export default Detail;
