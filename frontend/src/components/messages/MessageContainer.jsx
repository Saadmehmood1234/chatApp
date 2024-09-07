
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = ({isSidebarOpen}) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{
    return ()=>setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-lg shadow-lg">
      {!selectedConversation ? (
        <NoChatSelected isSidebarOpen={isSidebarOpen}/>
      ) : (
        <div className={`${ !isSidebarOpen ?"bg-gradient-to-r from-slate-500 to-gray-700 px-4 py-2 mx-12 mb-2 rounded-lg":"hidden"} `}>
          
          <span className="label-text font-bold text-gray-300">To:</span>{" "}
          <span className="text-white font-bold">{selectedConversation.fullname}</span>
        </div>
      )}
      <Messages isSidebarOpen={isSidebarOpen}/>
      <MessageInput />
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = ({isSidebarOpen}) => {
  const {authUser}=useAuthContext();
  return (
    <div className={`${ !isSidebarOpen ?"flex items-center justify-center w-full h-full":"hidden"}`}>
      <div
        className="px-4 text-center sm:text-lg md:text-xl
            text-gray-200 font-semibold flex flex-col items-center gap-2"
      >
        <p>Welcome 😎 {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center text-gray-400" />
      </div>
    </div>
  );
};
