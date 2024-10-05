import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from 'flowbite-react';

const ChatBottemp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState('initial');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (text, sender = 'bot') => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const handleButtonClick = (option) => {
    if (option === 'lab list') {
      setStage('labList');
      addMessage('Here are the available labs:');
    } else if (option === 'contact') {
      addMessage('For contact: Please reach us at support@example.com.');
    } else if (option === 'about') {
      addMessage('This app helps students navigate lab sessions and other academic resources.');
    }
  };

  const labs = [
    { name: 'C Lab',colour:"indigo", info: 'C Lab is in Semester 2.', path: '/btech/sem2/clab' },
    { name: 'Java Lab',colour:"purple", info: 'Java Lab is in Semester 3.', path: '/btech/sem3/javalab' },
    { name: 'DS Lab',colour:"success", info: 'Data Structures Lab is in Semester 3.', path: '/btech/sem3/dslab' },
    { name: 'OS Lab',colour:"failure", info: 'Operating Systems Lab is in Semester 4.', path: '/btech/sem4/oslab' },
    { name: 'Network Lab',colour:"warning", info: 'Network Lab is in Semester 6.', path: '/btech/sem6/networklab' },
    { name: 'DBMS Lab',colour:"gray", info: 'Dbms Lab is in Semester 5.', path: '/btech/sem5/dbmslab' },
  ];

  const handleLabClick = (lab) => {
    const selectedLab = labs.find((l) => l.name === lab);
    if (selectedLab) {
      addMessage(`${selectedLab.info} Click the button below to navigate.`);
      addMessage(
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
          onClick={() => navigate(selectedLab.path)}
        >
          Go to {lab}
        </button>,
        'bot'
      );
    } else {
      addMessage("I don't have information on that lab yet.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-72">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
        onClick={toggleChat}
      >
        {isOpen ? 'Close Chat' : 'Help'}
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg mt-4 p-4 flex flex-col space-y-2">
          <div className="h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg my-1 ${
                  msg.sender === 'bot'
                    ? 'bg-gray-200 text-left'
                    : 'bg-blue-500 text-white text-right'
                }`}
              >
                {typeof msg.text === 'string' ? msg.text : msg.text}
              </div>
            ))}
          </div>

          {stage === 'initial' && (
            <div className="flex flex-col space-y-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleButtonClick('lab list')}
              >
                Lab List
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleButtonClick('contact')}
              >
                Contact
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleButtonClick('about')}
              >
                About
              </button>
            </div>
          )}

          {stage === 'labList' && (
            <div className="flex flex-wrap gap-2">
              {labs.map((lab) => (
                <Badge
                  key={lab.name}
                  color={lab.colour}
                  onClick={() => handleLabClick(lab.name)}
                  className="cursor-pointer"
                >
                  {lab.name}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              value={''}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              disabled
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" disabled>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBottemp;
