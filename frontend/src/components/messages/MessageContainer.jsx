import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-lg shadow-lg">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="bg-gradient-to-r from-slate-600 to-gray-700 mt-5 p-4 rounded-lg shadow-md mb-4">
        {/* <span className="label-text font-bold text-gray-300">To:</span>{" "} */}
        <span className="text-white text-lg font-semibold">
          {selectedConversation.fullname}
        </span>
      </div>
      )}
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl
            text-gray-200 font-semibold flex flex-col items-center gap-2"
      >
        <p className="text-4xl max-lg:text-2xl">Welcome {authUser.fullname}</p>
        <div className="flex gap-4">
          <p className="text-4xl max-lg:text-2xl">ChatterBox</p>
          <TiMessages className="text-4xl md:text-5xl text-center text-gray-400" />
        </div>
      </div>
    </div>
  );
};
