import NavbarList from '../comps/NavbarList';

const LayoutList = ({ children, title }) => {
  return (
    <>
      <NavbarList title={title} />
      <div className="max-w-screen-2xl mx-auto">
        <main style={{ minHeight: 'calc(100vh - 64px)', overflowX: 'hidden' }}>{children}</main>
      </div>
    </>
  );
};

LayoutList.defaultProps = {
  title: 'Bottle Rocket',
};

export default LayoutList;
