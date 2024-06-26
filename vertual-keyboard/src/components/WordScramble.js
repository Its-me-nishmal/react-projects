import React, { useState, useEffect } from 'react';
import './WordScramble.css'; // Import your CSS file

const words = [
    "HELLO", "WORLD", "REACT", "SCRAMBLE",
    "BANANA", "COMPUTER", "JAVASCRIPT", "PROGRAMMING",
    "ELEPHANT", "TIGER", "GIRAFFE", "CHEETAH",
    "PYTHON", "RUBY", "JAVA", "SWIFT",
    "MOON", "SUN", "STARS", "PLANET",
    "OCEAN", "BEACH", "MOUNTAIN", "FOREST",
    "GUITAR", "PIANO", "VIOLIN", "TRUMPET",
    "COOKIE", "CAKE", "ICECREAM", "CHOCOLATE",
    "CLOUD", "RAINBOW", "THUNDER", "LIGHTNING",
    "FIRE", "WATER", "EARTH", "AIR",
    "SOCCER", "BASKETBALL", "TENNIS", "VOLLEYBALL",
    "BOOK", "NEWSPAPER", "MAGAZINE", "JOURNAL",
    "TELEVISION", "RADIO", "MOVIE", "MUSIC",
    "CIRCUS", "CARNIVAL", "FESTIVAL", "PARADE",
    "ZEBRA", "HIPPOPOTAMUS", "RHINOCEROS", "KANGAROO",
    "SPACESHIP", "ASTRONAUT", "SATELLITE", "ROCKET",
    "UNIVERSE", "GALAXY", "NEBULA", "BLACKHOLE",
    "ALIEN", "PLANETARIUM", "METEORITE", "ASTEROID",
    "SCIENCE", "BIOLOGY", "PHYSICS", "CHEMISTRY",
    "MATH", "GEOMETRY", "ALGEBRA", "CALCULUS",
    "HISTORY", "GEOGRAPHY", "CIVICS", "ECONOMICS",
    "LANGUAGE", "GRAMMAR", "VOCABULARY", "LITERATURE",
    "ART", "MUSEUM", "SCULPTURE", "PAINTING",
    "DANCE", "THEATER", "ACTOR", "ACTRESS"
  ]; 

const scrambleWord = (word) => {
  let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
  return scrambled !== word ? scrambled : scrambleWord(word);
};

const WordScramble = ({ text, setText }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds timer
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleWrongAnswer();
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    if (text.toUpperCase() != '' && text.toUpperCase() === currentWord.toUpperCase() && !gameOver) {
      handleCorrectAnswer();
    }
  }, [text]);

  const startGame = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setTimeLeft(30); // Reset timer to 10 seconds
    setGameOver(false);
    setText('');
  };

  const handleCorrectAnswer = () => {
    setGameOver(true);
    setModalMessage('Correct answer! Well done.');
    setModalOpen(true);
  };

  const handleWrongAnswer = () => {
    setGameOver(true);
    setModalMessage(`Wrong answer. The correct word was: ${currentWord}`);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRetry = () => {
    closeModal();
    startGame();
  };

  return (
    <div className="word-scramble-container">
      <p className="scramble-text">Unscramble the word:</p>
      <p className="word">{scrambledWord}</p>
      <p className="timer">Time Left: {timeLeft} seconds</p>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={handleRetry}>Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordScramble;
