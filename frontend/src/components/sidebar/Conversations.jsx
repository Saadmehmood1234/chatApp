// import React from 'react'
// import Conversation from './Conversation'
// import useGetConversation from '../../hooks/useGetConversation'
// import { getRandomEmoji } from '../../utils/emojis'

// const Conversations = () => {
//   const {loading,conversations}=useGetConversation();
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       {conversations.map((conversation,idx)=>(
//         <Conversation
//         key={conversation._id}
//         conversation={conversation}
//         emoji={getRandomEmoji()}
//         lastIdx={idx===conversations.length-1}
//         />
//       ))}
//       {loading ? <span className='loading loading-spinner mx-auto'></span>:null}
//     </div>
//   )
// }

// export default Conversations


import React from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className='py-2 flex flex-col overflow-y-auto md:h-[600px] lg:h-[700px] max-sm:h-[500px]'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
