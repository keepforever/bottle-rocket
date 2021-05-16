import classnames from 'classnames';

const HamburgerIcon = ({ isWhite }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classnames('h-12 w-12 mr-3', {
      'text-white': isWhite,
    })}
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

export default HamburgerIcon;
