import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize OpenRouter client (OpenRouter is compatible with OpenAI's API)
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

// System prompt for the chatbot
const SYSTEM_PROMPT = `
You are Pantech Marine Services' AI assistant. You provide helpful, accurate information about our marine survey and consulting company.

Company Information:
- Name: Pantech Marine Services
- Established: 1982 (over 40 years of experience)
- Location: Dubai, United Arab Emirates
- Service Area: GCC & Mediterranean ports
- Contact: +971 4 234 5678 (24/7), operations@pantechmarine.com
- Completed: 15,000+ surveys

Services Offered:
• Marine Claims - Expert assessment and documentation for insurance claims
• Heavy Lift Cargo - Specialized surveys for oversized cargo shipments
• Classification Surveys - Vessel and cargo classification inspections
• Draft Surveys - Accurate cargo quantity measurements
• P&I Surveys - Protection and Indemnity surveys
• Risk Assessments - Comprehensive risk evaluation

Key Points to Emphasize:
• We offer 24/7 emergency service
• Fully certified and accredited marine surveyors
• International recognition and certifications
• Extensive regional coverage across GCC and Mediterranean

Always be professional, helpful, and concise. If asked about something outside your knowledge, politely direct them to contact us directly at +971 4 234 5678 or operations@pantechmarine.com.
`;

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
    
    const completion = await openai.chat.completions.create({
      model: 'anthropic/claude-haiku-4.5',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message.trim() }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });
    
    const reply = completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';
    
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
