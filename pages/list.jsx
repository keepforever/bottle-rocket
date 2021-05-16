import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Map from '../comps/Map';

import Layout from '../comps/Layout';
import FailedToLoad from '../comps/FailedToLoad';
import 'mapbox-gl/dist/mapbox-gl.css';

const ImageGrid = ({ restaurants, onSelectRestaurant }) => {
  return (
    <ul
      role="list"
      className="p-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      {!!restaurants?.length &&
        restaurants.map((rest) => (
          <li
            key={rest?.name}
            className="relative"
            onClick={(e) => {
              e.preventDefault();
              onSelectRestaurant(rest?.name);
            }}
            restaurant-name={rest?.name}
          >
            <div
              restaurant-name={rest?.name}
              className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
            >
              <img
                restaurant-name={rest?.name}
                src={rest.backgroundImageURL}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
              <button
                restaurant-name={rest?.name}
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {rest?.name}</span>
              </button>
            </div>
            <p
              restaurant-name={rest?.name}
              className="mt-2 block text-lg font-medium text-gray-900 truncate pointer-events-none"
            >
              {rest?.name}
            </p>
            <p
              restaurant-name={rest?.name}
              className="block text-sm font-medium text-gray-500 pointer-events-none"
            >
              {rest?.category}
            </p>
          </li>
        ))}
    </ul>
  );
};

const DetailSidebar = ({ selectedRestaurant = {} }) => {
  const displayInfo = {
    city: selectedRestaurant.location.city,
    address: selectedRestaurant.location.address,
    'Cross Street': selectedRestaurant.location.crossStreet,
  };
  return (
    <aside className="hidden w-full bg-white p-8 overflow-y-auto md:block">
      <div className="pb-16 space-y-6">
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
        {/* <div>
          <h3 className="font-medium text-gray-900">Description</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-500 italic">Add a description to this image.</p>
            <button
              type="button"
              className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">{}</span>
            </button>
          </div>
        </div> */}
        {/* <div>
          <h3 className="font-medium text-gray-900">Shared with</h3>
          <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            {selectedRestaurant.sharedWith.map((person) => (
              <li key={person.id} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={person.imageUrl} alt="" className="w-8 h-8 rounded-full" />
                  <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                </div>
                <button
                  type="button"
                  className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove<span className="sr-only"> {person.name}</span>
                </button>
              </li>
            ))}
            <li className="py-2 flex justify-between items-center">
              <button
                type="button"
                className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                  <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  Share
                </span>
              </button>
            </li>
          </ul>
        </div>
         */}
        {/* <div className="flex">
          <button
            type="button"
            className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
          <button
            type="button"
            className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delete
          </button>
        </div> */}
      </div>
    </aside>
  );
};

const DrawerDetail = ({ open, setOpen, selectedRestaurant }) => {
  const displayInfo = {
    city: selectedRestaurant?.location?.city,
    address: selectedRestaurant?.location?.address,
    'Cross Street': selectedRestaurant?.location?.crossStreet,
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={() => {}}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Panel title
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="pb-16 space-y-6">
                      <div>
                        <div className="block w-full rounded-lg" style={{ maxHeight: '400px' }}>
                          <Map restaurant={selectedRestaurant} />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                          <div>
                            <h2 className="text-lg font-medium text-gray-900">
                              <span className="sr-only">Details for </span>
                              {selectedRestaurant.name}
                            </h2>
                            <p className="text-sm font-medium text-gray-500">
                              {selectedRestaurant.category}
                            </p>
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
                            <div
                              key={key}
                              className="py-3 flex justify-between text-sm font-medium"
                            >
                              <dt className="text-gray-500">{key}</dt>
                              <dd className="text-gray-900">{displayInfo[key]}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const List = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [fetchError, setFetchError] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

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

  const handleSelectRestaurant = (name) => {
    const isSmall = window.matchMedia('(max-width: 768px)')?.matches;

    if (isSmall) {
      setSelectedRestaurant(name);
      setOpen(true);
    } else {
      setSelectedRestaurant(name);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  if (fetchError)
    return (
      <Layout title="Lunch Tyme">
        <FailedToLoad />
      </Layout>
    );

  return (
    <Layout title="Lunch Tyme">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="w-full pb-4"
          style={{ maxHeight: 'calc(100vh - 64px)' /* , overflowX: 'scroll'  */ }}
        >
          <DetailSidebar
            selectedRestaurant={restaurants.find((r) => r.name === selectedRestaurant)}
          />
        </div>
        <div className="w-full" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'scroll' }}>
          <ImageGrid restaurants={restaurants} onSelectRestaurant={handleSelectRestaurant} />
        </div>
      </div>
      <DrawerDetail
        open={open}
        setOpen={setOpen}
        selectedRestaurant={restaurants.find((r) => r.name === selectedRestaurant)}
      />
    </Layout>
  );
};

export default List;
