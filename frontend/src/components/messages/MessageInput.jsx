

import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
const MessageInput = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit=async(e)=>{
 e.preventDefault();
 if(!message) return;
 await sendMessage(message);
 setMessage("");
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg p-1.5"
        >
         {loading?<div className="loading loading-spinner"></div>: <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

