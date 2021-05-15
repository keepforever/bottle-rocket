import Link from 'next/link';

const NavbarAlpha = (props) => {
  return (
    <nav className="bg-gray-800" style={{ height: '64px' }}>
      <div className="px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a>
            <img src="/home-color.svg" alt="home house" className="inline w-6" />
          </a>
        </Link>
        <Link href="/houses/add">
          <a>Add House</a>
        </Link>
        <button onClick={() => {}}>Logout</button>
      </div>
    </nav>
  );
};

export default NavbarAlpha;
