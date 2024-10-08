// import { useAuthContext} from '../../context/AuthContext'
// import useConversation from '../../zustand/useConversation';
// import React from "react";

// const Message = ({message}) => {
//   const {authUser}=useAuthContext();
//   const {selectedConversation}=useConversation();
//   const fromMe=message.senderId=authUser._id;
//   const chatClassName=fromMe?'chat-end':'chat-start';
//   const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
//   const bubbleBgColor=fromMe?'bg-blue-500':"";
//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//         <div className="w-12 rounded-full">
//           <img src={profilePic} alt="avatar" />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-gradient-to-r from-orange-500 to-pink-500} ${bubbleBgColor}`}>
//        {message.message}
//       </div>
//       <div className="chat-footer text-xs opacity-50 flex gap-1 items-center text-gray-300">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;

// import { extractTime } from "../../utils/extractTime";
// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";
// import React from "react";

// const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const formatedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? "chat-end" : "chat-start";
//   const profilePic = fromMe
//     ? authUser.profilePic
//     : selectedConversation?.profilePic;
//   const shakeClass = message.shouldShake ? "shake" : "";
//   return (
//     <div className={`chat  ${chatClassName} `}>
//       <div className="chat-image avatar">
//         <div className="w-12 rounded-full">
//           <img src={profilePic} alt="avatar" />
//         </div>
//       </div>
//       <div
//         className={`chat-bubble pb-2 text-white ${
//           fromMe
//             ? 
//             "bg-gradient-to-r from-orange-500 to-pink-500"
//             :"bg-blue-500"
//         } ${shakeClass}`}
//       >
//         {message.message}
//       </div>
//       <div className="chat-footer text-xs opacity-50 flex gap-1 items-center text-gray-300">
//         {formatedTime}
//       </div>
//     </div>
//   );
// };

// export default Message;


import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gradient-to-r from-orange-500 to-pink-500";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;