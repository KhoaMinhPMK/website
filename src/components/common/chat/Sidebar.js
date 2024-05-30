import React, { useState } from 'react';
import { BiFilter, BiX, BiSearch, BiHomeAlt, BiMessageRounded, BiLogOut, BiChevronDown } from 'react-icons/bi'; // Import các biểu tượng từ thư viện react-icons

const Sidebar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <aside className={`bg-gray-900 w-64 min-h-screen p-4 space-y-6 ${sidebarOpen ? '' : 'hidden'}`}>
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <BiFilter className="text-white text-4xl cursor-pointer" onClick={toggleSidebar} />
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
          <BiX className="text-white cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar} />
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
        <BiSearch className="text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <BiHomeAlt />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <BiMessageRounded />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Messages</span>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu}>
        <BiMessageRounded />
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span className={`text-sm ${submenuOpen ? 'rotate-180' : ''}`} id="arrow">
            <BiChevronDown />
          </span>
        </div>
      </div>
      <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuOpen ? '' : 'hidden'}`} id="submenu">
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <BiLogOut />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
