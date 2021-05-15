import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutAlpha from '../comps/LayoutAlpha';
import FailedToLoad from '../comps/FailedToLoad';

const List = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    const fetchRestaurants = async () => {
      let resp = null;
      try {
        resp = await axios.get(`/api/restaurants`);
        setRestaurants(resp?.data || []);
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchRestaurants();
  }, []);

  if (fetchError)
    return (
      <LayoutAlpha title="Lunch Tyme">
        <FailedToLoad />
      </LayoutAlpha>
    );

  console.log('\n', '\n', `restaurants?.[0] = `, restaurants?.[0], '\n', '\n');

  return (
    <LayoutAlpha title="Lunch Tyme">
      <ul
        role="list"
        className="p-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {!!restaurants?.length &&
          restaurants.map((rest) => (
            <li key={rest?.name} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img
                  src={rest.backgroundImageURL}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {rest?.name}</span>
                </button>
              </div>
              <p className="mt-2 block text-lg font-medium text-gray-900 truncate pointer-events-none">
                {rest?.name}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {rest?.category}
              </p>
            </li>
          ))}
      </ul>
    </LayoutAlpha>
  );
};

export default List;
