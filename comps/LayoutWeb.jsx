import NavbarWeb from '../comps/NavbarWeb';

const LayoutWeb = ({ children, title }) => {
  return (
    <>
      <NavbarWeb />
      <div className="max-w-screen-2xl mx-auto">
        <main style={{ minHeight: 'calc(100vh - 64px)', overflowX: 'hidden' }}>{children}</main>
      </div>
    </>
  );
};

LayoutWeb.defaultProps = {
  title: 'Bottle Rocket',
};

export default LayoutWeb;
