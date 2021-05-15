import NavbarAlpha from '../comps/NavbarAlpha';

const LayoutAlpha = ({ children, title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavbarAlpha title={title} />
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</main>
    </div>
  );
};

LayoutAlpha.defaultProps = {
  title: 'Bottle Rocket',
};

export default LayoutAlpha;
