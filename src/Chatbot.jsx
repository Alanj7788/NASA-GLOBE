import React, { useState, useRef } from 'react';
import { Button, Drawer } from 'flowbite-react';
import Tesseract from 'tesseract.js';
import { FaPlus } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLocation } from 'react-router-dom';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [input, setInput] = useState(''); // User input
  const [messages, setMessages] = useState([]); // Messages history
  const textareaRef = useRef(null); // Ref for textarea
  const location = useLocation();

  const handleClose = () => {
    setIsOpen(false);
    setIsOptionsOpen(false); // Close options dropdown
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Read and process the image using Tesseract.js
    await processImage(file);
  };

  const processImage = async (imageData) => {
    try {
      const result = await Tesseract.recognize(
        imageData,
        'eng',
        {
          logger: info => console.log(info) // Log progress
        }
      );

      const recognizedText = result.data.text.trim();
      if (recognizedText) {
        setInput(recognizedText); // Fill the text box with recognized text
      } else {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'No text recognized from the image.' }]);
      }
    } catch (error) {
      console.error("Error recognizing text:", error);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'Error processing the image.' }]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Automatically adjust the textarea height
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
  };

  // Function to send message to Gemini AI
  const sendMessageToGeminiAI = async (message) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent([message]);

      const reply = result.response.text() || 'Sorry, I could not fetch a response at the moment.';
      return reply; // Assuming the response has a 'candidates[0].text' field
    } catch (error) {
      console.error('Error communicating with Gemini AI:', error);
      return 'Sorry, there was an issue processing your request.';
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      // Add the user's message to the message list
      setMessages(prevMessages => [...prevMessages, { sender: 'user', text: input }]);

      // Send input to Gemini AI and await the response
      const reply = await sendMessageToGeminiAI(input);

      // Add the Gemini AI response to the message list
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: reply }]);

      setInput(''); // Clear input after sending
      textareaRef.current.style.height = "auto"; // Reset height after sending
    }
  };

  const hideChatbot = ['/btech/sem1','/btech/sem2/clab', '/dslab', '/clab'].includes(location.pathname);

  return (
    <>
      <div className="fixed bottom-6 p-4 right-0">
        {!isOpen && (
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => setIsOpen(true)}
          >
            Chatbot
          </Button>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="flex flex-col h-full"
      >
        <Drawer.Header title="Chatbot" />

        <div className="flex flex-col h-full">
          {/* Main Content of Chatbot */}
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg max-w-xs break-words ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
                  }`}
                style={{ wordWrap: 'break-word' }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input Section Fixed at Bottom */}
          <div className="flex items-center p-2 border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700">
            <div className="relative ml-2">
              <button
                onClick={() => setIsOptionsOpen(!isOptionsOpen)} // Toggle options dropdown
                className="flex items-center bg-blue-700 text-white rounded-lg px-2 py-1 hover:bg-blue-600 focus:outline-none"
              >
                <FaPlus className="mr-1" /> {/* Plus icon */}
              </button>
              {isOptionsOpen && (
                <div className="absolute z-10 bg-white shadow-md rounded-lg p-2">
                  <label className="block text-blue-700 hover:bg-gray-200 rounded px-2 py-1 cursor-pointer">
                    Select from Gallery
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden" // Hide the default file input
                    />
                  </label>
                </div>
              )}
            </div>

            <textarea
              ref={textareaRef} // Ref for textarea
              value={input}
              onChange={handleInputChange}
              className="ml-1 flex-grow px-4 py-3 text-sm text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none resize-none"
              placeholder="Type your message..."
              style={{ minHeight: '40px', maxHeight: '200px', overflowY: 'auto' }} // Set limits for min and max height
              rows={1} // Adjust initial height as needed
            />
            <button
              onClick={handleSend} // Send user input
              className="ml-1 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Chatbot;
