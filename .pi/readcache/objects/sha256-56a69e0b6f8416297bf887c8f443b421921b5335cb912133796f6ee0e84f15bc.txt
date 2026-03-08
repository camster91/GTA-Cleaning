import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

const FAQ = {
  quote: "I can help you get a quote! Please tell me your property type (residential/commercial) and a bit about the cleaning needed.",
  services: "We offer Residential, Office, Retail, Floor Maintenance, and Post-Construction cleaning.",
  default: "I'm not sure about that. Would you like to talk to a human? Just say 'talk to human' and I'll send an email for you."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the GTA Cleaning Assistant. To get started, what is your email address?", sender: 'bot' }
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
      setMessages([...newMessages, { text: "Thanks! How can I help you today? (Type: Quote, Services, or Talk to human)", sender: 'bot' }]);
    } else if (step === 'options') {
      if (input.toLowerCase().includes('quote')) {
        setStep('details');
        setMessages([...newMessages, { text: FAQ.quote, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('service')) {
        setMessages([...newMessages, { text: FAQ.services, sender: 'bot' }]);
      } else {
        setMessages([...newMessages, { text: FAQ.default, sender: 'bot' }]);
      }
    } else if (step === 'details') {
      // Send the lead via existing contact API
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'Chatbot User', email, message: input, service: 'Chatbot Lead' })
        });
        setMessages([...newMessages, { text: "Got it! I've sent your request to our team. We'll be in touch soon.", sender: 'bot' }]);
        setStep('options');
      } catch (err) {
        setMessages([...newMessages, { text: "Sorry, I had trouble sending that. Please try calling us!", sender: 'bot' }]);
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
            <h4>GTA Cleaning Support</h4>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => <div key={i} className={`message ${m.sender}`}>{m.text}</div>)}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type a message..." />
            <button onClick={handleSend}><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;