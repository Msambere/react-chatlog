import './App.css';
import ColorChoices from './components/ColorChoices';
import ChatLog from './components/ChatLog';
import MESSAGES from './data/messages.json';
import { useState } from 'react';



const App = () => {
  const [messageData, setMessageData] = useState(MESSAGES);

  const findChatMembers = (messages) =>{
    let chatMembers =[];
    for(let message of messages){
      if (!chatMembers.includes(message.sender)){
        chatMembers.push(message.sender);
      };
    };
    chatMembers= chatMembers.map((member,i) =>{
      let memberObj={};
      memberObj.id = i;
      memberObj.name = member;
      memberObj.color= '';
      memberObj.local= false;
      return memberObj;
    });
    chatMembers[0].local = true;
    return chatMembers;
  };

  const [chatMembers, setChatMembers] = useState(findChatMembers(MESSAGES));

  const chatTitle = (members) =>{
    if (members.length == 2) {
      return `${members[0].name} and ${members[1].name}`;
    }else if (members.length > 2) {
      let title=``;
      let lastMember = members.at(-1).name;
      for (let member of members.slice(0,-1)){
        title += `${member.name}, `;
      }
      title += ` and ${lastMember}`;
      return title;
    }
  };

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
    setChatMembers(members => {
      return members.map((member)=>{
        if (member.name === name) {
          return {...member, color: newColor};
        }else{
          return member;
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
        <ColorChoices
          members={chatMembers}
          changeSenderColor={changeSenderColor}
        />
      </header>
      <main>
        <ChatLog
          entries={messageData}
          onLikedToggle={toggleLiked}
          chatMembers={chatMembers}
        />
      </main>
    </div>
  );
};

export default App;
