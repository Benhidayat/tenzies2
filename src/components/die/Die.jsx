import './Die.css';

const Die = ({ value, isHeld, id, hold, ref}) => {
  return (
    <button 
        className="die__item"
        onClick={()=> hold(id)}
        style={{backgroundColor: isHeld ? '#59E391' : '#ffffff'}}
        aria-label={`Die with value is ${value} and ${isHeld ? 'is held' : 'not held'}`}
        type='button'
        ref={ref}
    >{value}</button>
  )
}

export default Die
