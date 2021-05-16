import { useRouter } from 'next/router';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import { linkConfig } from '../constants';
import HamburgerIcon from './HamburgerIcon';

const MyMenuReach = ({ title }) => {
  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
  };
  return (
    <Menu>
      <MenuButton className="btn btn-primary mr-1">
        <div className="flex items-center">
          <HamburgerIcon className="h-12 w-12 mr-3" />
          <p className="font-bold tracking-tighter text-red-500">{title}</p>
        </div>
      </MenuButton>
      <MenuList className="bg-white rounded-lg">
        {linkConfig.map((option) => (
          <MenuItem
            className="cursor-pointer hover:bg-green-400 hover:text-white px-4"
            key={option.href}
            onSelect={() => {
              handleNavigate(option.href);
            }}
          >
            <a className="-m-3 p-3 block">
              <p className="text-base font-medium">{option.name}</p>
              <p className="mt-1 text-sm">{option.description}</p>
            </a>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NavbarWeb = ({ title = '' }) => {
  return (
    <div className="h-16">
      <div className="px-6 flex items-center justify-between h-16">
        <MyMenuReach title={title} />
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
