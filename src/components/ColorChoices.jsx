import ColorPicker from './ColorPicker';
import './ColorChoices.css'
import PropTypes from 'prop-types';


const ColorChoices = ({members, changeSenderColor}) =>{
  const colorPickers = members.map( member=>{
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
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    local: PropTypes.bool.isRequired,
  })).isRequired
};