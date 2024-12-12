import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) =>{
  const chatEntries = props.entries.map((entry)=>{
    return(
      <ChatEntry
        key={entry.id}
        id ={entry.id}
        sender={entry.sender}
        timeStamp={entry.timeStamp}
        body={entry.body}
        onLikedToggle = {props.onLikedToggle}
        liked ={entry.liked}
        localSender= {props.localSender}
      />
    );
  });

  return(
    <main>
      {chatEntries}
    </main>
  );
};

ChatLog.propTypes ={
  onLikedToggle: PropTypes.func.isRequired,
  localSender: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  }))
};



export default ChatLog;