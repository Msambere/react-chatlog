import PropTypes from 'prop-types';
import './ColorPicker.css';

const ColorPicker = ({member, changeSenderColor}) =>{
  const handleColorChange = (e) => changeSenderColor(member.name, e.target.id);

  return(
    <section className="color-picker">
      <h3 className={member.color}>{member.name}&apos;s Color:</h3>
      <section className="color-options">
        <button onClick={(e)=>handleColorChange(e)} id='red' className="color-option">🔴</button>
        <button onClick={(e)=>handleColorChange(e)} id='orange' className="color-option">🟠</button>
        <button onClick={(e)=>handleColorChange(e)} id='yellow' className="color-option">🟡</button>
        <button onClick={(e)=>handleColorChange(e)} id='green' className="color-option">🟢</button>
        <button onClick={(e)=>handleColorChange(e)} id='blue' className="color-option">🔵</button>
        <button onClick={(e)=>handleColorChange(e)} id='purple' className="color-option">🟣</button>
      </section>
    </section>

  );
};


ColorPicker.propTypes ={
  changeSenderColor: PropTypes.func.isRequired,
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    local: PropTypes.bool.isRequired
  })
};

export default ColorPicker;