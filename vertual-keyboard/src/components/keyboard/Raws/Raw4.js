import react from 'react'
import speechSynthesis from 'speech-synthesis';
const Raw4 = ({ onkeypress }) => {
    const keys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
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

export default Raw4