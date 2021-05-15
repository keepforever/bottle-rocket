import Link from 'next/link';

const NavbarAlpha = ({ title }) => {
  return (
    <nav className="bg-green-400" style={{ height: '64px' }}>
      <div className="px-6 flex items-center justify-between h-16">
        <Link href="/">Home</Link>
        <Link href="/houses/add">
          <a>{title}</a>
        </Link>
        <button onClick={() => {}}>Logout</button>
      </div>
    </nav>
  );
};

NavbarAlpha.defaultProps = {
  title: 'Bottle Rocket',
};

export default NavbarAlpha;
