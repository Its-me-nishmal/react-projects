import react from 'react'
import speechSynthesis from 'speech-synthesis';
const Raw5 = ({ onkeypress }) => {
    const keys = ['Space','Back'];
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

export default Raw5