import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let openai = null;
if (process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY.trim() !== '') {
  openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
  });
}

const SYSTEM_PROMPT = `You are Pantech Marine Group's AI assistant. Only answer using the approved company information below. Do not invent certifications, coverage areas, statistics, or services not listed here.

Company Information:
- Name: Pantech Marine Group
- Entities: Pantech Marine Services DMCEST (Dubai Maritime City) and Red Water Marine Co. (Dammam)
- Surveying roots in Dammam since 1982, UAE expansion in 2010
- Contact: Dubai +971 55 229 4871, Dammam +966 56 528 6769, operations@pantechmarine.com

Coverage:
- UAE: Dubai Maritime City, Fujairah, Sharjah
- Saudi Arabia: Dammam, Jubail, Jeddah, Yanbu
- Oman: Sohar
- Qatar: Ras Laffan
- Kuwait: Shuwaikh

Services (Project & Cargo):
- Heavy Lift / Project Cargo Surveys
- Loading and Discharge Supervision
- Cargo Condition / Outturn Surveys
- Pre-Shipment Surveys
- Cargo Damage Surveys
- Tally and Quantity Supervision

Services (Vessel):
- On-Hire / Off-Hire Surveys
- Bunker Quantity Surveys
- Draft Surveys
- Vessel Condition Surveys
- Pre-Purchase Surveys
- Hatch Sealing / Unsealing

Services (Operational):
- Port Captain / Supercargo Services
- Ro-Ro / MAFI Supervision
- Stowage and Securing Inspections
- Lashing Inspections
- P&I Related Attendance
- Marine Claims and Damage Surveys

Key Points:
- 24/7 availability for urgent survey needs
- Reports prepared on a factual, independent and observational basis, supported by operational records and photographic evidence

Rules:
- Never claim ISO 9001, IMO recognition, classification society approval, or GCC licensing
- Never mention Mediterranean ports
- Never say "consultants" or "consulting"
- If asked about anything not listed above, direct to +971 55 229 4871 (Dubai) or +966 56 528 6769 (Dammam) or operations@pantechmarine.com
- Always be professional, helpful, and concise.`;

app.get('/', (req, res) => {
  res.json({
    message: 'Pantech Marine Group API',
    status: 'running',
    version: '1.0.0'
  });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required',
        reply: 'Please provide a valid message.'
      });
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    let reply;

    if (openai) {
      try {
        const completion = await openai.chat.completions.create({
          model: 'anthropic/claude-haiku-4.5',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message.trim() }
          ],
          max_tokens: 500,
          temperature: 0.3,
        });

        reply = completion.choices[0]?.message?.content || getFallbackReply(message.trim());
      } catch (aiError) {
        console.error('AI Chat error:', aiError);
        reply = getFallbackReply(message.trim());
      }
    } else {
      reply = getFallbackReply(message.trim());
    }

    res.json({
      reply,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: 'Internal server error',
      reply: 'Please contact us directly at +971 55 229 4871 (Dubai) or +966 56 528 6769 (Dammam).'
    });
  }
});

function getFallbackReply(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return 'Hello! Welcome to Pantech Marine Group. How can I assist you today? You can ask about our services, coverage, or contact details.';
  }

  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('survey')) {
    return 'Our services include:\n\nProject & Cargo:\n- Heavy Lift / Project Cargo Surveys\n- Loading & Discharge Supervision\n- Cargo Condition / Outturn Surveys\n- Pre-Shipment Surveys\n- Cargo Damage Surveys\n- Tally & Quantity Supervision\n\nVessel:\n- On-Hire / Off-Hire Surveys\n- Bunker Quantity Surveys\n- Draft Surveys\n- Vessel Condition Surveys\n- Pre-Purchase Surveys\n- Hatch Sealing / Unsealing\n\nOperational:\n- Port Captain / Supercargo Services\n- Ro-Ro / MAFI Supervision\n- Stowage & Securing Inspections\n- Lashing Inspections\n- P&I Related Attendance\n- Marine Claims & Damage Surveys\n\nAvailable 24/7 across UAE, KSA, Oman, Qatar, and Kuwait.';
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return 'You can reach us at:\nDubai: +971 55 229 4871 (Pantech Marine Services DMCEST)\nDammam: +966 56 528 6769 (Red Water Marine Co.)\nEmail: operations@pantechmarine.com';
  }

  if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('history')) {
    return 'Pantech Marine Group has surveying roots in Dammam since 1982, with UAE expansion in 2010. We operate as Pantech Marine Services DMCEST (Dubai Maritime City) and Red Water Marine Co. (Dammam).';
  }

  if (lowerMessage.includes('emergency') || lowerMessage.includes('24/7') || lowerMessage.includes('urgent')) {
    return 'Yes, we offer 24/7 attendance for urgent marine survey needs. Call Dubai: +971 55 229 4871 or Dammam: +966 56 528 6769.';
  }

  if (lowerMessage.includes('coverage') || lowerMessage.includes('port') || lowerMessage.includes('where')) {
    return 'We serve:\nUAE: Dubai Maritime City, Fujairah, Sharjah\nSaudi Arabia: Dammam, Jubail, Jeddah, Yanbu\nOman: Sohar\nQatar: Ras Laffan\nKuwait: Shuwaikh';
  }

  return 'Thank you for your message. For detailed inquiries, please contact us at +971 55 229 4871 (Dubai) or +966 56 528 6769 (Dammam) or operations@pantechmarine.com. We are available 24/7.';
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, and message are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
        message: 'Please provide a valid email address.'
      });
    }

    console.log('Contact form submission:', {
      name, email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
      timestamp: new Date().toISOString()
    });

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

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist.'
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred.'
  });
});

app.listen(PORT, () => {
  console.log(`Pantech Marine Group API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});
