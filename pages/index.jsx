import LayoutWeb from '../comps/LayoutWeb';

const Home = () => {
  return (
    <LayoutWeb>
      <div className="flex items-center justify-center text-black">
        <div className="container ">
          <div className="w-full bg-blue-600 text-red-800">hello world</div>
        </div>
      </div>
    </LayoutWeb>
  );
};

export default Home;
