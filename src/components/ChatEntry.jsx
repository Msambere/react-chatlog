import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartColor = props.liked ? '❤️':'🤍' ;
  const localRemote = props.sender == props.localSender ? 'local': 'remote';

  const handleLikedClicked = () => {
    props.onLikedToggle(props.id);
  };

  return (
    <div className={`chat-entry ${localRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time = {props.timeStamp}/>
        </p>
        <button onClick={handleLikedClicked}className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  localSender: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  sender: PropTypes.string.isRequired,
  id: PropTypes.number,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikedToggle: PropTypes.func.isRequired
};

export default ChatEntry;
