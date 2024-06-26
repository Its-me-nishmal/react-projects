import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard/Keyboard';
import Display from './components/keyboard/Display';
import WordScramble from './components/WordScramble';


function App() {
  const [text, setText] = useState('');
  const onkeypress = (key) => {
    if (key === 'Space') {
      setText(text + ' ');
    } else if ( key === 'Back') {
      setText(text.slice(0, -1));
    } else  {
      setText(text + key);
    }
  }

  const handleBackspace = () => {
    
  }

  return (
    <div className="App">
      
      <WordScramble text={text} setText={setText} />
       <Display  text={text} />
       <Keyboard onkeypress={onkeypress} />
    </div>
  );
}

export default App;
