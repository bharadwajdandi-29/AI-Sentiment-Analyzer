
import React, { useState } from "react";
import Sentiment from "sentiment";

const sentiment = new Sentiment();

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    const analysis = sentiment.analyze(text);
    if (analysis.score > 0) setResult("Positive 😊");
    else if (analysis.score < 0) setResult("Negative 😞");
    else setResult("Neutral 😐");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">AI Sentiment Analyzer</h1>
        <textarea
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all resize-none text-lg"
          rows="5"
          placeholder="Type your thoughts here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          className="mt-4 px-6 py-2 rounded-full bg-teal-500 text-white text-lg font-medium shadow hover:bg-teal-600 transition-all"
        >
          Analyze
        </button>
        {result && (
          <div className="mt-6 text-2xl font-semibold text-gray-700">
            Result: <span className="text-teal-600">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
