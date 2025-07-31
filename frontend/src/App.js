import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
       const response = await axios.post(`${process.env.REACT_APP_API_URL}/recommend`, {
        prompt,
      });
      setResults(response.data);
    } catch (err) {
      console.error("Error fetching recommendations", err);
    }
  };

  return (
    <div className="container">
      <h1>📚 Rediscover the <span className="highlight">Joy of Reading</span></h1>
      <p>Describe the kind of book you're in the mood for.</p>

      <input
        type="text"
        placeholder="e.g., fantasy with dragons and magic"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleSubmit}>✨ Recommend Books</button>

      <div className="results">
        {results.map((book, index) => (
          <div key={index} className="card">
            <h3>{book.book_title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genres:</strong> {book.genres}</p>
            <p><strong>Summary:</strong> {book.book_details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
