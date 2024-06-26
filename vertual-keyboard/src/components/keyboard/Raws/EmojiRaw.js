import React from 'react';

const EmojiRaw = ({ onkeypress }) => {
    const emojis = ['😀', '😂', '🥰', '😎', '😢', '🤔', '😡', '🥳'];

    const handleEmojiClick = (emoji) => {
        onkeypress(emoji);
    };

    return (
        <div>
            {emojis.map((emoji, index) => (
                <button key={index} className='keyboard-button' onClick={() => handleEmojiClick(emoji)}>
                    {emoji}
                </button>
            ))}
        </div>
    );
}

export default EmojiRaw;
