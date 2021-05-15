import Navbar from '../comps/Navbar';

const Layout = ({ children, title }) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar title={title} />
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</main>
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Bottle Rocket',
};

export default Layout;
