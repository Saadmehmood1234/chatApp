
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{
    return ()=>setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-lg shadow-lg">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="bg-gradient-to-r from-slate-500 to-gray-700 px-4 py-2 mb-2 rounded-lg">
          <span className="label-text font-bold text-gray-300">To:</span>{" "}
          <span className="text-white font-bold">{selectedConversation.fullname}</span>
        </div>
      )}
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
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
