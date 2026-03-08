import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

const FAQ = {
  quote: "I'd love to help! Please tell me a bit about your property (residential/commercial) and the cleaning you need, and I'll get that quote started.",
  services: "We handle Residential, Office, Retail, Floor Maintenance, and Post-Construction jobs. Which one are you looking for?",
  default: "I might need to jump in on that one personally. Would you like me to send a note to my team? Just say 'send email' and I'll make sure we get back to you."
};

const getIntent = (text) => {
  const t = text.toLowerCase();
  if (/(quote|price|cost|estimate|money|how much)/.test(t)) return 'QUOTE';
  if (/(service|what do you do|clean|offer|help)/.test(t)) return 'SERVICES';
  if (/(human|person|speak|talk|real|agent|danny|send email)/.test(t)) return 'HUMAN';
  return 'DEFAULT';
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Danny from GTA City Cleaning. What's the best email to reach you at?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('email'); 
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = async (text) => {
    // Simulate "typing" by adding a pause before showing bot response
    await sleep(600);
    setMessages(prev => [...prev, { text, sender: 'bot' }]);
  };

  const handleSend = async (message) => {
    const textToSend = message || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { text: textToSend, sender: 'user' }]);
    setInput('');

    if (step === 'email') {
      setEmail(textToSend);
      setStep('options');
      await addBotMessage("Nice to meet you! How can I help you out?");
    } else {
      const intent = getIntent(textToSend);
      
      if (intent === 'QUOTE') {
        setStep('details');
        await addBotMessage(FAQ.quote);
      } else if (intent === 'SERVICES') {
        await addBotMessage(FAQ.services);
      } else if (intent === 'HUMAN') {
        try {
            await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: 'Chatbot User', email, message: textToSend, service: 'Chatbot Lead' })
            });
            await addBotMessage("Got it! I've personally received your request and will follow up with you shortly.");
            setStep('options');
          } catch (err) {
            await addBotMessage("I'm having a technical glitch. Could you call me directly at 647-901-1995?");
          }
      } else if (step === 'details') {
          try {
            await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: 'Chatbot User', email, message: textToSend, service: 'Chatbot Lead' })
            });
            await addBotMessage("Got it! I've personally received your request and will follow up with you shortly.");
            setStep('options');
          } catch (err) {
            await addBotMessage("I'm having a technical glitch. Could you call me directly at 647-901-1995?");
          }
      } else {
        await addBotMessage(FAQ.default);
      }
    }
  };

  const renderQuickReplies = () => {
    if (step === 'email') return null;
    
    const options = [
      { text: "Quote", value: "I need a quote" },
      { text: "Services", value: "What services do you offer?" },
      { text: "Talk to Danny", value: "send email" }
    ];
    
    return (
      <div className="quick-replies">
        {options.map(opt => (
          <button key={opt.text} className="quick-reply-btn" onClick={() => handleSend(opt.value)}>
            {opt.text}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <MessageSquare />}
      </button>
      {isOpen && (
        <div className="chat-window glass-morphism">
          <div className="chat-header">
            <h4>Chat with Danny</h4>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => <div key={i} className={`message ${m.sender}`}>{m.text}</div>)}
            <div ref={messagesEndRef} />
          </div>
          {renderQuickReplies()}
          <div className="chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your response..." />
            <button onClick={() => handleSend()}><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;