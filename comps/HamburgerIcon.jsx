import classnames from 'classnames';

import { AiOutlineMenu } from 'react-icons/ai';

const HamburgerIcon = ({ isWhite }) => (
  <AiOutlineMenu
    className={classnames('h-8 w-8 mr-3', {
      'text-white': isWhite,
    })}
  />
);

export default HamburgerIcon;
