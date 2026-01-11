import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, User, AlertCircle } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  error?: boolean
}

const API_URL = (import.meta.env?.VITE_API_URL as string) || 'http://localhost:3000'

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
  const [isLoading, setIsLoading] = useState(false)
  const [connectionError, setConnectionError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessageText = input.trim()
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setConnectionError(false)

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessageText }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || data.error || "I'm having trouble processing your request right now. Please try again or contact us directly at +971 4 234 5678.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setConnectionError(true)
      
      // Fallback response when API is unavailable
      const fallbackResponses: { [key: string]: string } = {
        'services': 'We offer comprehensive marine survey services including Marine Claims, Heavy Lift Cargo, Classification Surveys, Draft Surveys, P&I Surveys, and Risk Assessments. All services are available 24/7 across GCC & Mediterranean ports.',
        'contact': 'You can reach us at:\n📞 Phone: +971 4 234 5678 (24/7)\n📧 Email: operations@pantechmarine.com\n📍 Dubai, UAE',
        '24/7': 'Yes! We provide 24/7 emergency service for all marine survey needs. Our team is available round-the-clock.',
        'certification': 'We are fully certified and accredited marine surveyors with international recognition, serving since 1982.'
      }
      
      const lowerInput = userMessageText.toLowerCase()
      let fallbackResponse = "I'm having trouble connecting to our server right now. Please contact us directly:\n📞 +971 4 234 5678\n📧 operations@pantechmarine.com"
      
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerInput.includes(key)) {
          fallbackResponse = response
          break
        }
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
        error: true
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
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
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 z-50"
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
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] md:w-96 max-w-[calc(100vw-2rem)] md:max-w-md h-[calc(100vh-8rem)] md:h-[600px] max-h-[calc(100vh-8rem)] md:max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
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
                        : message.error
                        ? 'bg-yellow-50 text-gray-800 border border-yellow-200'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.error && (
                      <div className="flex items-center gap-1 mb-1 text-yellow-700">
                        <AlertCircle className="h-3 w-3" />
                        <span className="text-xs font-semibold">Connection Issue</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-gray-400 ml-12">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span>Pantech Assistant is typing...</span>
              </div>
            )}
            {connectionError && !isLoading && (
              <div className="text-xs text-yellow-600 ml-12 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                <span>Connection issue detected. Showing fallback response.</span>
              </div>
            )}
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
                disabled={!input.trim() || isLoading}
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
