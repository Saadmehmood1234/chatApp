import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessage from "../../hooks/useListenMessage";
import { PiMaskSadLight } from "react-icons/pi";
import { TfiFaceSad } from "react-icons/tfi";
const Messages = ({ isSidebarOpen }) => {
  const { messages, loading } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} isSidebarOpen={isSidebarOpen} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="w-full gap-4 flex h-[80vh] justify-center items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
		  <div className="flex gap-4">
            <p className="text-center text-white text-4xl  max-lg:text-3xl">
              No Messages
            </p>
            <TfiFaceSad className="text-4xl max-lg:text-3xl mt-1 text-white" />
          </div>
		  <p  className="text-center text-white text-4xl  max-lg:text-3xl">Start The Conversation</p>
		  </div>
        </div>
      )}
    </div>
  );
};
export default Messages;
