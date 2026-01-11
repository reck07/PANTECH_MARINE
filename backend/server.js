import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Knowledge base for chatbot responses
const knowledgeBase = {
  services: {
    keywords: ['service', 'services', 'offer', 'offering', 'what do you do', 'what can you help'],
    response: `We offer comprehensive marine survey and consulting services including:
• Marine Claims - Expert assessment and documentation for insurance claims
• Heavy Lift Cargo - Specialized surveys for oversized cargo shipments
• Classification Surveys - Vessel and cargo classification inspections
• Draft Surveys - Accurate cargo quantity measurements
• P&I Surveys - Protection and Indemnity surveys
• Risk Assessments - Comprehensive risk evaluation

All services are available 24/7 across GCC & Mediterranean ports.`
  },
  contact: {
    keywords: ['contact', 'phone', 'email', 'reach', 'get in touch', 'how to contact'],
    response: `You can reach us through:
📞 Phone: +971 4 234 5678 (Available 24/7)
📧 Email: operations@pantechmarine.com
📍 Location: Dubai, United Arab Emirates
🌍 Service Area: GCC & Mediterranean ports

We typically respond within 24 hours, but for urgent matters, please call our 24/7 hotline.`
  },
  availability: {
    keywords: ['24/7', 'available', 'availability', 'hours', 'when', 'time', 'emergency'],
    response: `Yes! We provide 24/7 emergency service for all marine survey needs. Our team is available round-the-clock to assist with urgent requirements across all time zones. Whether it's a weekend, holiday, or late night, we're here to help.`
  },
  certifications: {
    keywords: ['certification', 'certified', 'accredited', 'qualification', 'credentials', 'license'],
    response: `We are fully certified and accredited marine surveyors and consultants with international recognition. Our team holds various certifications and accreditations that demonstrate our expertise and commitment to industry standards. We've been serving the industry since 1982 with a proven track record.`
  },
  experience: {
    keywords: ['experience', 'years', 'established', 'since', 'history', 'background', 'how long'],
    response: `Pantech Marine Services has been serving the industry since 1982 - that's over 40 years of excellence! We've completed 15,000+ surveys and have extensive expertise in marine surveying across GCC and Mediterranean ports.`
  },
  quote: {
    keywords: ['quote', 'price', 'cost', 'pricing', 'fee', 'charge', 'how much'],
    response: `To get a customized quote for your specific needs, please contact us:
📞 Call: +971 4 234 5678
📧 Email: operations@pantechmarine.com
📝 Or fill out our contact form on the website

Our pricing depends on the type of survey, location, and specific requirements. We'll provide a detailed quote after understanding your needs.`
  },
  location: {
    keywords: ['location', 'where', 'dubai', 'uae', 'gcc', 'mediterranean', 'ports', 'coverage'],
    response: `We're based in Dubai, United Arab Emirates, and serve:
• UAE ports
• GCC region (Saudi Arabia, Kuwait, Qatar, Bahrain, Oman)
• Mediterranean ports

Our extensive regional coverage allows us to provide timely service across these areas.`
  },
  default: {
    response: `I'm here to help with questions about Pantech Marine Services. I can assist with:
• Our services and offerings
• Contact information
• Availability and emergency services
• Certifications and credentials
• Getting a quote
• Company information

Feel free to ask me anything, or use the quick questions below!`
  }
};

// Function to find the best matching response
function getChatResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check each knowledge base category
  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (key === 'default') continue;
    
    const matches = data.keywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (matches) {
      return data.response;
    }
  }
  
  // Check for greeting
  const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
  if (greetings.some(g => lowerMessage.includes(g))) {
    return `Hello! Welcome to Pantech Marine Services. ${knowledgeBase.default.response}`;
  }
  
  // Default response
  return knowledgeBase.default.response;
}

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Pantech Marine Services API',
    status: 'running',
    version: '1.0.0'
  });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ 
        error: 'Message is required',
        reply: 'Please provide a valid message.'
      });
    }
    
    // Simulate a small delay for more natural conversation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const reply = getChatResponse(message.trim());
    
    res.json({ 
      reply,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      reply: 'I apologize, but I encountered an error. Please try again or contact us directly at +971 4 234 5678.'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Name, email, and message are required.'
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        message: 'Please provide a valid email address.'
      });
    }
    
    // Simulate processing (in production, you'd send an email or save to database)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
      timestamp: new Date().toISOString()
    });
    
    // Simulate a small delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({ 
      success: true,
      message: 'Thank you for your inquiry. We will contact you soon.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'There was an error submitting your form. Please try again or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not found',
    message: 'The requested endpoint does not exist.'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: 'An unexpected error occurred.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Pantech Marine Services API server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});
