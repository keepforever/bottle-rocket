import LayoutWeb from '../comps/LayoutWeb';
import { summaryConfig } from '../constants';

const Home = () => {
  return (
    <LayoutWeb title="Home">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Submission Summary
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Please use the menu button in the upper right corner to navigate to the various
              solutions. <span className="font-bold">Note, the layouts are responsive.</span>
            </p>

            <br />

            <a
              href="https://www.loom.com/share/7a00c87d9788462f9d01d77fc14f81bf"
              class="no-underline hover:underline text-2xl text-blue-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              Video Demo
            </a>

            <br />
            <br />
            <a
              href="https://github.com/keepforever/bottle-rocket"
              class="no-underline hover:underline text-2xl text-blue-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              Code Repo
            </a>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {summaryConfig.map((item, index) => (
                <div key={item.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <p className="text-2xl">{index + 1} </p>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </LayoutWeb>
  );
};

export default Home;
