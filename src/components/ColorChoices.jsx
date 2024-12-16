import ColorPicker from './ColorPicker';
import './ColorChoices.css'
import PropTypes from 'prop-types';


const ColorChoices = ({changeSenderColor, memberColorInfo}) =>{
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
};