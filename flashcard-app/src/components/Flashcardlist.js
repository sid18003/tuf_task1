import React, { useState } from 'react';
import '../components/flas.css';
import Delete from './Delete';
const Flashcardlist = () => {
  const [flashcards, setFlashcards] = useState([
    { question: "Why do programmers prefer dark mode?", answer: "Because light attracts bugs." },
    { question: "What do you call a fish with no eyes?", answer: "Fsh." },
    { question: "How many programmers does it take to change a light bulb?", answer: "None. It's a hardware problem." },
    { question: "Why don't scientists trust atoms?", answer: "Because they make up everything." },
    { question: "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's freezing out here!", answer: "" }
  ]);

  const [flip, setFlip] = useState(false);
  const [currindex, setCurrIndex] = useState(0);

  const nextHandler = () => {
    setCurrIndex((currindex + 1) % flashcards.length);
    setFlip(false); // Reset flip state when changing cards
  };

  const previousHandler = () => {
    setCurrIndex((currindex - 1 + flashcards.length) % flashcards.length);
    setFlip(false);
  };

  const handleFlip = () => setFlip(!flip);

  return (
    <div>
      
      {flashcards.length > 0 && (
        <div className='flashcard-container'>
        <div className='card-wrapper'>
          <div className={`card ${flip ? 'flip' : ''}`} onClick={handleFlip}>
            <div className="front">{flashcards[currindex].question}</div>
            <div className="back">{flashcards[currindex].answer}</div>
          </div>
          
        </div>
        <div className='controls'>
            <button onClick={previousHandler}>Previous</button>
            <button onClick={nextHandler}>Next</button>
          </div>

        </div>
      )}
     <Delete flashcards={flashcards} />
    </div>
  );
}

export default Flashcardlist;
