import { DiAndroid, DiApple } from "react-icons/di";

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 p-1 flex justify-between items-center">
      <div className="flex items-center dropdowns xl:ml-12 lg:ml-8 md:ml-2">
        <div className="dropdown px-2">
          <select className="mt-2 bg-white">
            <option>English US</option>
            <option>English UK</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="mt-2 bg-white shadow-none">
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
      <div className="flex items-center xl:space-x-5 lg:space-x-4 md:space-x-3 space-x-2 mr-2 xl:mr-12 lg:mr-16 md:mr-8">
        <span className="text-sm sm:text-base">Download app</span>
        <DiAndroid />
        <DiApple />
      </div>
    </div>
  );
};

export default TopBar;
