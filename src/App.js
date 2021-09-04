import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning",
  "😉": "Winking",
  "😂": "Laughing",
  "😊": "Smiling",
  "😴": "Sleeping",
  "😭": "Crying",
  "😑": "Expressionless",
  "😏": "Smirking",
  "😡": "Angry",
  "🤮": "Sick",
  "🤔": "Thinking",
  "🤥": "Lying",
  "😕": "Confused"
};

const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this in database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "darkblue" }}>Emojeeeeez</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3> Emoji we know </h3>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
