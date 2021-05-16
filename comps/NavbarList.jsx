import { useRouter } from 'next/router';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import HamburgerIcon from './HamburgerIcon';
import { linkConfig } from '../constants';

const MyMenu = () => {
  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
  };
  return (
    <Menu>
      <MenuButton className="btn btn-primary mr-1">
        <HamburgerIcon isWhite />
      </MenuButton>
      <MenuList className="bg-white p-3">
        {linkConfig.map((option) => (
          <MenuItem
            className="cursor-pointer hover:bg-green-300 hover:text-white px-4"
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

const NavbarList = () => {
  return (
    <div className="h-16 bg-green-400">
      <div className="px-6 flex items-center justify-between h-16">
        <MyMenu />
        <p className="text-white"> Lunch Tyme</p>
        <img className="h-8 w-8" src="/icon_map@2x.png" alt="map icon" />
      </div>
    </div>
  );
};

NavbarList.defaultProps = {
  title: 'Bottle Rocket',
};

export default NavbarList;
