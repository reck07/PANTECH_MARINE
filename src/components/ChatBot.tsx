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
      text: "Hello! I'm here to help with questions about Pantech Marine Group. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [connectionError, setConnectionError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Focus the input when chat opens
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

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
        text: data.reply || data.error || "I'm having trouble processing your request right now. Please try again or contact us directly at +971 55 229 4871 (Dubai) or +966 56 528 6769 (Dammam).",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setConnectionError(true)
      
      // Fallback response when API is unavailable
      const fallbackResponses: { [key: string]: string } = {
        'services': 'Our services include:\n\nProject & Cargo:\n- Heavy Lift / Project Cargo Surveys\n- Loading & Discharge Supervision\n- Cargo Condition / Outturn Surveys\n- Pre-Shipment Surveys\n- Cargo Damage Surveys\n- Tally & Quantity Supervision\n\nVessel:\n- On-Hire / Off-Hire Surveys\n- Bunker Quantity Surveys\n- Draft Surveys\n- Vessel Condition Surveys\n- Pre-Purchase Surveys\n- Hatch Sealing / Unsealing\n\nOperational:\n- Port Captain / Supercargo Services\n- Ro-Ro / MAFI Supervision\n- Stowage & Securing Inspections\n- Lashing Inspections\n- P&I Related Attendance\n- Marine Claims & Damage Surveys\n\nAvailable 24/7 across UAE, KSA, Oman, Qatar, and Kuwait.',
        'contact': 'You can reach us at:\n📞 Dubai: +971 55 229 4871 (Pantech Marine Services DMCEST)\n📞 Dammam: +966 56 528 6769 (Red Water Marine Co.)\n📧 Email: operations@pantechmarine.com',
        '24/7': 'Yes! We provide 24/7 attendance for urgent marine survey needs. Call Dubai: +971 55 229 4871 or Dammam: +966 56 528 6769.',
        'certification': 'Our surveyors operate to recognized professional marine survey standards. Reports are prepared on a factual, independent and observational basis.',
        'coverage': 'We serve:\nUAE: Dubai Maritime City, Fujairah, Sharjah\nSaudi Arabia: Dammam, Jubail, Jeddah, Yanbu\nOman: Sohar\nQatar: Ras Laffan\nKuwait: Shuwaikh'
      }
      
      const lowerInput = userMessageText.toLowerCase()
      let fallbackResponse = "I'm having trouble connecting to our server right now. Please contact us directly:\n📞 Dubai: +971 55 229 4871\n📞 Dammam: +966 56 528 6769\n📧 operations@pantechmarine.com"
      
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
    "What is your coverage area?"
  ]

  return (
    <>
      {/* WhatsApp Button - Fixed position, moves up when chat is open on mobile */}
      <a
        href="https://wa.me/971552294871"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-40 flex items-center justify-center bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bottom-16 right-4 md:bottom-[calc(100vh-5rem+6rem)] md:right-6'
            : 'bottom-6 right-4 md:bottom-6 md:right-6'
        }`}
        aria-label="Contact us on WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.265.119.472.15.671.15.272 0 .469-.026.6-.076l1.617-1.443c.051-.044.2-.137.271-.342.178-.52-.208-.96-.53-1.236-.19-.16-.342-.19-.53-.184zM12 2C6.477 2 2 6.477 2 12c0 2.18.695 4.17 1.863 5.835L2 22l5.405-1.768c1.337.75 2.84 1.29 4.408 1.29 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className="fixed bottom-16 right-4 md:bottom-20 md:right-6 w-[calc(100vw-2rem)] md:w-96 max-w-[calc(100vw-2rem)] md:max-w-md h-[calc(100vh-5rem)] md:h-[500px] max-h-[calc(100vh-5rem)] md:max-h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200 animate-slide-up"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          aria-describedby="chat-description"
        >
          {/* Chat Header */}
          <div className="bg-primary text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <img src="/color-replaced.png" alt="" className="h-5 w-5 object-contain filter brightness-0 invert" aria-hidden="true" />
              </div>
              <div>
                <h3 id="chat-title" className="font-semibold">Pantech Marine Group</h3>
                <p id="chat-description" className="text-xs text-white/80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 min-h-0 overflow-y-auto p-1.5 space-y-1.5 bg-gray-50" 
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
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
                    aria-hidden="true"
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <img src="/color-replaced.png" alt="" className="h-4 w-4 object-contain filter brightness-0 invert" />
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
                    role={message.sender === 'user' ? 'none' : 'none'}
                  >
                    {message.error && (
                      <div className="flex items-center gap-1 mb-1 text-yellow-700" role="alert">
                        <AlertCircle className="h-3 w-3" aria-hidden="true" />
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
            <div className="px-3 py-1.5 bg-white border-t border-gray-200">
              <p className="text-[11px] text-gray-500 mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(q)
                      setTimeout(() => handleSend(), 100)
                    }}
                    className="text-[11px] bg-gray-100 hover:bg-gray-200 px-2.5 py-0.5 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-2 bg-white border-t border-gray-200 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary text-white p-1.5 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
