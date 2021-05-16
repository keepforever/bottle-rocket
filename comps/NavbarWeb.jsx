import { Fragment } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from '@reach/menu-button';

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

const MyMenu = ({ title }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-x-20"
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

//   <Link key={option.href} href={option.href}>
//     <a className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
//       <p className="text-base font-medium text-gray-900">{option.name}</p>
//       <p className="mt-1 text-sm text-gray-500">{option.description}</p>
//     </a>
//   </Link>

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mr-3   "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const MyMenuReach = () => {
  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
  };
  return (
    <Menu>
      <MenuButton className="btn btn-primary mr-1">
        <div className="flex items-center">
          <HamburgerIcon />
          <p className="font-bold tracking-tighter text-red-500"> contact</p>
        </div>
      </MenuButton>
      <MenuList className="bg-white p-3">
        {solutions.map((option) => (
          <MenuItem
            className="cursor-pointer hover:bg-green-300 hover:text-white px-4"
            key={option.href}
            onSelect={() => {
              handleNavigate(option.href);
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NavbarWeb = ({ title }) => {
  return (
    <div className="h-16">
      <div className="px-6 flex items-center justify-between h-16">
        <MyMenuReach />
        <p className="font-extrabold tracking-tight text-red-500 text-xl md:text-2xl">
          bottle rocket <span className="text-base font-normal ">&reg;</span>
        </p>
      </div>
    </div>
  );
};

NavbarWeb.defaultProps = {
  title: 'Bottle Rocket',
};

export default NavbarWeb;
