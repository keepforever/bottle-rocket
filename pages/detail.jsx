import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutList from '../comps/LayoutList';
import FailedToLoad from '../comps/FailedToLoad';
import Map from '../comps/Map';
import MapDetail from '../comps/MapDetail';

const DetailSidebar = ({ selectedRestaurant = {} }) => {
  return (
    <aside className="w-full bg-white md:p-8 overflow-y-auto">
      <div className="hidden md:block pb-16 space-y-6">
        <div>
          <div className="block w-full aspect-w-7 aspect-h-4 rounded-lg overflow-hidden">
            <img src={selectedRestaurant.backgroundImageURL} alt="" className="object-cover" />
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
          <div className="flex w-3/4">
            <p className="pt-4 pl-4">{selectedRestaurant?.location?.formattedAddress?.join(' ')}</p>
          </div>

          <div className="flex w-3/4">
            <p className="pt-4 pl-4">{selectedRestaurant?.contact?.formattedPhone}</p>
          </div>

          {selectedRestaurant?.contact?.twitter && (
            <div className="flex w-3/4">
              <p className="pt-4 pl-4">&#64;{selectedRestaurant?.contact?.twitter}</p>
            </div>
          )}
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
              <div className="flex w-3/4">
                <p className="pt-4 pl-4">
                  {selectedRestaurant?.location?.formattedAddress?.join(' ')}
                </p>
              </div>

              <div className="flex w-3/4">
                <p className="pt-4 pl-4">{selectedRestaurant?.contact?.formattedPhone}</p>
              </div>

              {selectedRestaurant?.contact?.twitter && (
                <div className="flex w-3/4">
                  <p className="pt-4 pl-4">&#64;{selectedRestaurant?.contact?.twitter}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const useDetailUtils = () => {
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

  const currentRestaurant = restaurants.find((r) => r.name === selectedRestaurant);

  return {
    restaurants,
    fetchError,
    selectedRestaurant,
    isLoading,
    currentRestaurant,
    setSelectedRestaurant,
  };
};

const Detail = () => {
  const { restaurants, fetchError, isLoading, currentRestaurant, setSelectedRestaurant } =
    useDetailUtils();
  if (isLoading) return <p>Loading...</p>;

  if (fetchError)
    return (
      <LayoutList title="Detail Page">
        <FailedToLoad />
      </LayoutList>
    );

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
          <MapDetail
            restaurant={currentRestaurant}
            isFull
            restaurants={restaurants}
            onSelectRestaurant={(name) => {
              setSelectedRestaurant(name);
            }}
          />
        </div>
      </div>
    </LayoutList>
  );
};

export default Detail;
