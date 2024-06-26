import react from 'react'
import speechSynthesis from 'speech-synthesis';
const Raw3 = ({ onkeypress }) => {
    const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const handleKeyClick = (key) => {
        speechSynthesis(key);
        onkeypress(key);
      };
    return (
        <div>
            {keys.map((key) => (
                <button className='keyboard-button' onClick={() => handleKeyClick(key)}>{key}</button>
            ))}
        </div>
    )
}

export default Raw3