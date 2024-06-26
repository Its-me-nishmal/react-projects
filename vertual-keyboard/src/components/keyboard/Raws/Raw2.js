import react from 'react'
import speechSynthesis from 'speech-synthesis';

const Raw2 = ({ onkeypress }) => {
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
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

export default Raw2