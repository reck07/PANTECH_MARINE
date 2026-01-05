import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help with questions about Pantech Marine Services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
      return "We offer comprehensive marine survey services including Marine Claims, Heavy Lift Cargo, Classification Surveys, Draft Surveys, P&I Surveys, and Risk Assessments. Would you like details on any specific service?"
    }

    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
      return "You can reach us at:\n📞 Phone: +971 4 234 5678 (24/7)\n📧 Email: info@pantechmarine.com\n📍 Location: Dubai, UAE\nWe serve GCC & Mediterranean ports."
    }

    if (lowerInput.includes('quote') || lowerInput.includes('price') || lowerInput.includes('cost')) {
      return "I'd be happy to help you get a quote! Please visit our Contact page and fill out the inquiry form, or call us directly at +971 4 234 5678. Our team will respond within 24 hours with a customized quote."
    }

    if (lowerInput.includes('experience') || lowerInput.includes('years') || lowerInput.includes('established')) {
      return "We've been serving clients since 1982 - that's over 40 years of experience! We're certified marine surveyors serving UAE, KSA, GCC, and Mediterranean ports with 24/7 availability."
    }

    if (lowerInput.includes('certification') || lowerInput.includes('certified') || lowerInput.includes('accredited')) {
      return "Yes, we are fully certified and accredited marine surveyors. Our team holds various industry certifications and we're recognized by major marine insurance companies and classification societies."
    }

    if (lowerInput.includes('emergency') || lowerInput.includes('urgent') || lowerInput.includes('24/7')) {
      return "Absolutely! We offer 24/7 emergency services. Call us at +971 4 234 5678 anytime - day or night - and we'll respond immediately to your marine survey needs."
    }

    if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('ports')) {
      return "We're based in Dubai, UAE, and serve ports across:\n• UAE (Dubai, Abu Dhabi, Sharjah)\n• Saudi Arabia (Jeddah, Dammam)\n• GCC Countries\n• Mediterranean ports\nWe can travel to your location for on-site surveys."
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to Pantech Marine Services. I'm here to answer your questions about our marine surveying services. What would you like to know?"
    }

    return "Thank you for your question! For more detailed information, please:\n1. Visit our Services page to learn about what we offer\n2. Check our Contact page for direct communication\n3. Call us at +971 4 234 5678 for immediate assistance\n\nIs there anything specific about our services you'd like to know?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "Do you provide 24/7 service?",
    "What are your certifications?"
  ]

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <img src="/logo.svg" alt="Pantech Marine Services Logo" className="h-5 w-5 object-contain brightness-0 invert" />
              </div>
              <div>
                <h3 className="font-semibold">Pantech Marine Services</h3>
                <p className="text-xs text-white/80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] flex items-start space-x-2 ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <img src="/logo.svg" alt="Pantech Marine Services Logo" className="h-4 w-4 object-contain brightness-0 invert" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(q)
                      setTimeout(() => handleSend(), 100)
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

