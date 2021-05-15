import NavbarAlpha from '../comps/NavbarAlpha';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <NavbarAlpha />
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</main>
    </div>
  );
};

export default Layout;
