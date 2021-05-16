import classnames from 'classnames';

import { AiOutlineMenu } from 'react-icons/ai';

const HamburgerIcon = ({ isWhite }) => (
  <AiOutlineMenu
    className={classnames('h-12 w-12 mr-3', {
      'text-white': isWhite,
    })}
  />
);

export default HamburgerIcon;
