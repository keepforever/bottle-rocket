import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';

const solutions = [
  {
    name: 'List',
    description: 'A list of restaurants.',
    href: '/list',
  },
  {
    name: 'Detail',
    description: 'A specific restaurant.',
    href: '/detail',
  },
  {
    name: 'Web',
    description: 'The requested web view comp.',
    href: '/web',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MyMenu = ({ title }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex text-white">
            <span>{title}</span>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-10"
          >
            <Popover.Panel
              static
              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((option) => (
                    <Link key={option.href} href={option.href}>
                      <a className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                        <p className="text-base font-medium text-gray-900">{option.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{option.description}</p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

const Navbar = ({ title }) => {
  return (
    <nav className="bg-green-400" style={{ height: '64px' }}>
      <div className="px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-white font-bold">Home</a>
        </Link>

        <MyMenu title={title} />

        <p>{title}</p>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Bottle Rocket',
};

export default Navbar;
