import './App.css';
import ColorChoices from './components/ColorChoices';
import ChatLog from './components/ChatLog';
import OG_MESSAGES from './data/messages.json';
import { useState } from 'react';

const MESSAGES = OG_MESSAGES.map( message =>{
  return {...message, color: '', local: message.sender === OG_MESSAGES[0].sender};
});

const App = () => {
  const [messageData, setMessageData] = useState(MESSAGES);

  const findChatMembers = (messages) =>{
    let chatMembers =[];
    for(let message of messages){
      if (!chatMembers.includes(message.sender)){
        chatMembers.push(message.sender);
      };
    };
    // Beenish suggestion: [...new Set(Data.map(message => message.sender))]
    return chatMembers;
  };

  const chatTitle = (members) =>{
    if (members.length == 2) {
      return `${members[0]} and ${members[1]}`;
    }else if (members.length > 2) {
      let lastMember = members.at(-1);
      let title= members.slice(0,-1).join(', ');
      title += `, and ${lastMember}`;
      return title;
    }
  };

  const getMemberColorInfo = (messages) =>{
    let chatMembers = [];
    let uniqueSenders = new Set();
    for(let message of messages){
      if (!uniqueSenders.has(message.sender)){
        let member = {
          name: message.sender,
          color: message.color,
        };
        chatMembers.push(member);
        uniqueSenders.add(message.sender);
      };
    };
    chatMembers= chatMembers.map((member,i) =>{
      return {...member, id:i};
    });
    return chatMembers;
  };

  const memberColorInfo = getMemberColorInfo(messageData);

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

  const changeSenderColor = (name, newColor) =>{
    setMessageData(messages => {
      return messages.map((message)=>{
        if (message.sender === name) {
          return {...message, color: newColor};
        }else{
          return message;
        }
      });
    });
  };

  const totalLikes = messageData.filter((entry)=> entry.liked === true).length;
  const chatMembers = findChatMembers(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat Between {chatTitle(chatMembers)}</h1>
        <h2>{totalLikes} ❤️s</h2>
        <ColorChoices
          memberColorInfo = {memberColorInfo}
          changeSenderColor={changeSenderColor}
        />
      </header>
      <main>
        <ChatLog
          entries={messageData}
          onLikedToggle={toggleLiked}
        />
      </main>
    </div>
  );
};

export default App;
