const Navbar = () => {
  return (
    <header className="flex items-center justify-center p-5 bg-green-500 text-white mb-3">
      <div className="container">
        <div className="flex justify-between items-center content-center w-full">
          <img
            className="h-6 sm:h-6 md:h-10 cursor-pointer"
            layout="intrinsic"
            src="/task-manager-logo.png"
            alt="Task Manager logo"
          />
          <div className="text-xs sm:text-sm">{'XXXXXXXX' || 'Loading user...'}</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
