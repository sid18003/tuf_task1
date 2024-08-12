// Delete.js
import React from 'react';

const Delete = ({ flashcards = [] }) => {
  const handleDelete = (index) => {
    // Implement delete functionality here
    console.log(`Delete flashcard at index ${index}`);
  };

  return (
    <div>
      <h2>Click on flashcard to delete</h2>
      {flashcards.length > 0 ? (
        <div>
          {flashcards.map((flashcard, index) => (
            <div key={index} className="flashcard" onClick={() => handleDelete(index)}>
              <div className="front">{flashcard.question}</div>
              <div className="back">{flashcard.answer}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No flashcards available</p>
      )}
    </div>
  );
}

export default Delete;
