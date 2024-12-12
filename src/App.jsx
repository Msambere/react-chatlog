import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import MESSAGES from './data/messages.json';
import { useState } from 'react';


const App = () => {
  const [messageData, setMessageData] = useState(MESSAGES);

  const findChatMembers = (messages) =>{
    let chatMembers =[];
    for (let message of messages){
      if (!chatMembers.includes(message.sender)){
        chatMembers.push(message.sender);
      };
    };
    return chatMembers;
  };

  const chatTitle = (members) =>{
    if (members.length == 2) {
      return `${members[0]} and ${members[1]}`;
    }else if (members.length > 2) {
      let lastMember = members.at(-1);
      let title = members.slice(0,-1).join(', ');
      return title + `, and ${lastMember}`;
    }
  };

  const chatMembers = findChatMembers(MESSAGES);
  const localSender = chatMembers[0];


  const toggleLiked = (messageID)=>{
    setMessageData(messages => {
      return messages.map(message => {
        if (message.id === messageID) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      });
    });
  };

  const totalLikes = messageData.filter((entry)=> entry.liked === true).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Between {chatTitle(chatMembers)}</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messageData} onLikedToggle={toggleLiked} localSender={localSender}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
