import { useState } from "react";
import words from "./data/wordList.json";
import { HangmanDrawing, HangmanWord, Keyboard } from "./components";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
};

export default App;
