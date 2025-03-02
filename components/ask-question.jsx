"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleAskQuestion = () => {
    if (!question.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const fakeResponse = `This is a dummy response for: "${question}"`;

      setChatHistory((prev) => [...prev, { question, response: fakeResponse }]);
      setLoading(false);
      setQuestion("");
    }, 2000);
  };

  return (


    // Not making it a FORM. Might create some errors beacuse of it.

    <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300 w-full">
      <h2 className="text-black text-xl font-bold mb-2">Ask a Question</h2>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Enter your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAskQuestion()} // Handle Enter key
          className="flex-1 p-2 border rounded-lg text-black"
        />
        <Button variant="outline" size="icon" onClick={handleAskQuestion} disabled={loading} className="cursor-pointer">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5 text-black" />}
        </Button>
      </div>

      <div className="mt-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className="p-2 border-b border-gray-300">
            <p className="text-black font-semibold">You: {chat.question}</p>
            <p className="text-gray-700">AI: {chat.response}</p>
          </div>
        ))}

        {loading && (
          <div className="p-2 text-gray-500 flex items-center">
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Generating response...
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestion;
