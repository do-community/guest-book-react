import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { getMessages } from "./api-stuff";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then(setMessages);
  }, []);

  function addMessage(message) {
    setMessages([message, ...messages]);
  }

  return (
    <>
      <div className="app min-h-screen bg-center">
        <div className="max-w-xl mx-auto px-10 py-20">
          <Header />

          {/* show a form to create a message */}
          <MessageForm addMessage={addMessage} />

          {/* show all messages */}
          <Messages messages={messages} />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <a
      className="bg-blue-400 hover:bg-blue-500 p-10 text-white text-xl font-bold flex justify-center items-center transition duration-300"
      href="https://do.co/chris"
    >
      Hosted on{" "}
      <img
        src="https://i.imgur.com/h482SSG.png"
        className="h-6 md:h-10 ml-4 transform"
      />
    </a>
  );
}
