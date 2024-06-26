import react from 'react'
import speechSynthesis from 'speech-synthesis';

const Raw1 = ({ onkeypress }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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

export default Raw1