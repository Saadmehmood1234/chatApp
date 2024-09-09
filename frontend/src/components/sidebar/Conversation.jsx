import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from '../../context/SocketContext'
const Conversation = ({ conversation, lastIdx, emoji }) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===conversation._id;
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation._id)

  return (
    <>
      <div className={`flex justify-center items-center transition duration-300 rounded p-4 py-1 cursor-pointer hover:orange-500 hover:opacity-70
      ${isSelected?"transition duration-300 rounded p-4 py-1  bg-orange-500 ":""}`}
      onClick={()=>setSelectedConversation(conversation)}>
        <div className="flex gap-2 items-center ">
          <div className={`avatar ${isOnline ? "online":""}`}>
            <div className="w-12 rounded-full">
              <img src={conversation.profilePic} alt="Avatar" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-4 flex-1">
          <div className="flex  justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            {/* <span className="text-xl mb-2">{emoji}</span> */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-2 py-0 h-1 bg-gray-600" />}
    </>
  );
};

export default Conversation;
