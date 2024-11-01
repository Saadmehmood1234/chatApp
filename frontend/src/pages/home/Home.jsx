

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { FiMenu } from "react-icons/fi";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex  h-[100%] w-[100%] max-sm:w-full rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="lg:hidden absolute top-4 left-4 z-100">
        <button
          onClick={toggleSidebar}
          aria-label="Menu"
          className="text-white"
          ref={menuButtonRef}
        >
          <FiMenu size={30} />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "block " : "hidden"
        } lg:block max-lg:w-[100%]   transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>
      <MessageContainer />
    </div>
  );
};

export default Home;
