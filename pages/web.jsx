import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import axios from 'axios';

import LayoutWeb from '../comps/LayoutWeb';
import FailedToLoad from '../comps/FailedToLoad';
import Map from '../comps/Map';

const LeftColumn = () => {
  return (
    <aside className="w-full bg-white pt-0 md:pt-8 overflow-y-auto md:block">
      <div className="relative bg-red-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-red-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl text-center">
            We look forward to hearing from you
          </h1>
        </div>
      </div>
      <div className="px-4">
        <h3 className="text-xl font-extrabold text-black sm:text-2xl text-center mt-8">
          Let us know how we can help!
        </h3>

        <hr
          className="my-8"
          style={{
            height: '3px',
            border: 'none',
            backgroundColor: 'red',
          }}
        />

        <p>
          If you are interested in hiring Bottle Rocket for your mobile project, please visit our{' '}
          <span className="font-bold">hire us</span> page.
        </p>
      </div>
    </aside>
  );
};

const RightColumn = () => {
  return (
    <aside className="w-full bg-white p-8 overflow-y-auto md:block">
      <p className="text-black text-xl font-bold mb-4">About You</p>
      <p className="text-gray-400 text-sm mb-4 italic">* indicates a required field</p>
      <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="full_name" className="sr-only">
            Full name
          </label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            autoComplete="name"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Message"
            defaultValue={''}
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
};

const Web = (props) => {
  return (
    <LayoutWeb title="contact">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full pb-4" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <LeftColumn />
        </div>
        <hr className="block mx-4 md:hidden my-4" />
        <div className="w-full" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'scroll' }}>
          <RightColumn />
        </div>
      </div>
    </LayoutWeb>
  );
};

export default Web;
