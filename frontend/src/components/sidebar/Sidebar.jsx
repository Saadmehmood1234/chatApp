// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//          <Conversations/>
//          <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar


import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 flex flex-col overflow-y-scroll p-4 rounded-lg mt-5'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
