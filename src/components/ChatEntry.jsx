import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartColor = props.liked ? '❤️':'🤍' ;
  const localRemote = props.local == true ? 'local': 'remote';
  const senderColor = props.color;

  const handleLikedClicked = () => {
    props.onLikedToggle(props.id);
  };

  return (
    <div className={`chat-entry ${localRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={senderColor}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time = {props.timeStamp}/>
        </p>
        <button onClick={handleLikedClicked}className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // member: PropTypes.shape({
    // }),
  local: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  sender: PropTypes.string.isRequired,
  id: PropTypes.number,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikedToggle: PropTypes.func.isRequired
};

export default ChatEntry;
