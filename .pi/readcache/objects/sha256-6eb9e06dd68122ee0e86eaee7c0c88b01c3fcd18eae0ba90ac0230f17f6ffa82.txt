import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

const FAQ = {
  quote: "I'd love to help! Please tell me a bit about your property (residential/commercial) and the cleaning you need, and I'll get that quote started.",
  services: "We handle Residential, Office, Retail, Floor Maintenance, and Post-Construction jobs. Which one are you looking for?",
  default: "I might need to jump in on that one personally. Would you like me to send a note to my team? Just say 'send email' and I'll make sure we get back to you."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Danny from GTA City Cleaning. What's the best email to reach you at?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('email'); // email, options, details
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    if (step === 'email') {
      setEmail(input);
      setStep('options');
      setMessages([...newMessages, { text: "Nice to meet you! How can I help you out? (Type: Quote, Services, or Send email)", sender: 'bot' }]);
    } else if (step === 'options') {
      if (input.toLowerCase().includes('quote')) {
        setStep('details');
        setMessages([...newMessages, { text: FAQ.quote, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('service')) {
        setMessages([...newMessages, { text: FAQ.services, sender: 'bot' }]);
      } else {
        setMessages([...newMessages, { text: FAQ.default, sender: 'bot' }]);
      }
    } else if (step === 'details' || input.toLowerCase().includes('send email')) {
      // Send the lead via existing contact API
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'Chatbot User', email, message: input, service: 'Chatbot Lead' })
        });
        setMessages([...newMessages, { text: "Got it! I've personally received your request and will follow up with you shortly.", sender: 'bot' }]);
        setStep('options');
      } catch (err) {
        setMessages([...newMessages, { text: "I'm having a technical glitch. Could you call me directly at 647-901-1995?", sender: 'bot' }]);
      }
    }
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
          <div className="chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your response..." />
            <button onClick={handleSend}><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;