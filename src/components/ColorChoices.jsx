import ColorPicker from './ColorPicker';
import './ColorChoices.css'
import PropTypes from 'prop-types';


const ColorChoices = ({changeSenderColor, memberColorInfo}) =>{
  // const getMemberInfo = (messages) =>{
  //   let chatMembers = [];
  //   let uniqueSenders = new Set();
  //   for(let message of messages){
  //     if (!uniqueSenders.has(message.sender)){
  //       let member = {
  //         name: message.sender,
  //         color: message.color,
  //         local: message.local
  //       };
  //       chatMembers.push(member);
  //       uniqueSenders.add(message.sender);
  //     };
  //   };
  //   chatMembers= chatMembers.map((member,i) =>{
  //     return {...member, id:i};
  //   });
  //   return chatMembers;
  // };
  // let members = getMemberInfo(messages);

  const colorPickers = memberColorInfo.map( member=>{
    return(
      <ColorPicker
        key={member.id}
        member={member}
        changeSenderColor={changeSenderColor}
      />
    );
  });

  return(
    <div className="member-colors">
      {colorPickers}
    </div>
  );
};

export default ColorChoices;

ColorChoices.propTypes={
  changeSenderColor: PropTypes.func.isRequired,
  memberColorInfo: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }))
  // messages: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   color: PropTypes.string.isRequired,
  //   local: PropTypes.bool.isRequired,
  //   sender: PropTypes.string.isRequired,
  //   body: PropTypes.string.isRequired,
  //   timeStamp: PropTypes.string.isRequired,
  //   liked: PropTypes.bool.isRequired
  // })).isRequired
};