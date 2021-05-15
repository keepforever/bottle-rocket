import Navbar from '../comps/Navbar';

const Layout = ({ children, title }) => {
  return (
    <>
      <Navbar title={title} />
      <div className="max-w-screen-2xl mx-auto">
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</main>
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Bottle Rocket',
};

export default Layout;
