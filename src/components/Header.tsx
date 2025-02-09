import { BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-teal-600">MedDash</div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <BellIcon className="h-6 w-6 text-gray-500" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">AD</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
