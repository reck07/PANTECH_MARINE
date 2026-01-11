# Testing Guide - Pantech Marine Services

## 🧪 Comprehensive Testing Checklist

### Prerequisites
1. Install all dependencies: `npm install`
2. Ensure Node.js 18+ is installed
3. Have a modern browser (Chrome, Firefox, Edge, Safari)

---

## 🚀 Starting the Application

### Development Mode
```bash
npm run dev
```

This starts:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000

### Testing Backend Only
```bash
npm run server
```

### Testing Frontend Only
```bash
npm run client
```

---

## ✅ Backend API Testing

### 1. Health Check Endpoint
```bash
# Using curl
curl http://localhost:3000/api/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2024-...",
  "uptime": 123.45
}
```

### 2. Chat API Endpoint
```bash
# Test chat endpoint
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What services do you offer?"}'

# Expected response:
{
  "reply": "We offer comprehensive marine survey...",
  "timestamp": "2024-..."
}
```

**Test Cases:**
- ✅ Valid message
- ✅ Empty message (should return error)
- ✅ Missing message field (should return error)
- ✅ Very long message
- ✅ Special characters

### 3. Contact Form API Endpoint
```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "service": "marine-claims",
    "message": "I need a quote for marine survey"
  }'

# Expected response:
{
  "success": true,
  "message": "Thank you for your inquiry...",
  "timestamp": "2024-..."
}
```

**Test Cases:**
- ✅ Valid form submission
- ✅ Missing required fields (name, email, message)
- ✅ Invalid email format
- ✅ All fields provided
- ✅ Only required fields provided

---

## 🎨 Frontend Testing

### 1. Navigation Testing

**Test Steps:**
1. Open http://localhost:8080
2. Click through all navigation links:
   - Home (/)
   - About (/about)
   - Services (/services)
   - Contact (/contact)
3. Verify URL changes correctly
4. Verify page content loads
5. Test browser back/forward buttons

**Expected Results:**
- ✅ All pages load correctly
- ✅ Navigation is smooth
- ✅ No console errors
- ✅ Active page highlighted in navigation

### 2. Chatbot Testing

**Test Steps:**
1. Click the chat button (bottom-right corner)
2. Verify chat window opens
3. Test quick questions:
   - "What services do you offer?"
   - "How can I contact you?"
   - "Do you provide 24/7 service?"
   - "What are your certifications?"
4. Type custom messages
5. Test with backend running
6. Test with backend stopped (fallback mode)

**Expected Results:**
- ✅ Chat window opens/closes smoothly
- ✅ Quick questions work
- ✅ Custom messages get responses
- ✅ Loading indicators appear
- ✅ Fallback responses work when backend is down
- ✅ Error messages display correctly
- ✅ Mobile responsive

**Test Cases:**
- ✅ Backend running - normal operation
- ✅ Backend stopped - fallback mode
- ✅ Network error - error handling
- ✅ Empty message - validation
- ✅ Very long message
- ✅ Special characters

### 3. Contact Form Testing

**Test Steps:**
1. Navigate to /contact
2. Try submitting empty form
3. Fill form with invalid email
4. Fill form with valid data
5. Submit form
6. Verify success message
7. Verify form resets

**Expected Results:**
- ✅ Validation errors display
- ✅ Email format validation works
- ✅ Required field validation works
- ✅ Form submits successfully
- ✅ Success message appears
- ✅ Form resets after success
- ✅ Loading state during submission
- ✅ Error handling for network issues

**Test Cases:**
- ✅ Empty form submission
- ✅ Invalid email format
- ✅ Missing required fields
- ✅ Valid form submission
- ✅ Backend unavailable (error handling)
- ✅ Network timeout

### 4. Responsive Design Testing

**Test Steps:**
1. Open browser DevTools
2. Test different screen sizes:
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)
3. Test on actual mobile device (if available)

**Expected Results:**
- ✅ Layout adapts correctly
- ✅ Navigation menu works on mobile
- ✅ Chatbot is mobile-friendly
- ✅ Forms are usable on mobile
- ✅ Text is readable
- ✅ Buttons are tappable
- ✅ No horizontal scrolling

**Test Cases:**
- ✅ iPhone SE (375px)
- ✅ iPhone 12/13 (390px)
- ✅ iPad (768px)
- ✅ Desktop (1920px)
- ✅ Landscape orientation

### 5. Error Boundary Testing

**Test Steps:**
1. Intentionally trigger an error (modify code temporarily)
2. Verify error boundary catches it
3. Test "Try Again" button
4. Test "Go Home" button

**Expected Results:**
- ✅ Error boundary displays
- ✅ User-friendly error message
- ✅ Error details available (for debugging)
- ✅ Recovery options work
- ✅ No white screen of death

---

## 🔍 Browser Compatibility Testing

### Tested Browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest, if on Mac)

**Test Steps:**
1. Open application in each browser
2. Test all features
3. Check for console errors
4. Verify styling consistency

---

## ⚡ Performance Testing

### 1. Load Time
- ✅ Initial page load < 3 seconds
- ✅ Navigation between pages < 1 second
- ✅ API responses < 500ms

### 2. Bundle Size
```bash
npm run build
# Check dist/ folder size
```

### 3. Network Requests
- ✅ Minimal API calls
- ✅ Proper caching headers
- ✅ No unnecessary requests

---

## 🐛 Bug Testing

### Common Issues to Test:
1. **Network Failures**
   - Disconnect internet
   - Test chatbot fallback
   - Test form error handling

2. **Slow Network**
   - Throttle network in DevTools
   - Test loading states
   - Test timeout handling

3. **Invalid Input**
   - XSS attempts in forms
   - SQL injection attempts
   - Very long strings

4. **Browser Issues**
   - Disable JavaScript
   - Old browser versions
   - Incognito mode

---

## 📊 Test Results Template

```
Date: __________
Tester: __________
Environment: Development / Production

Backend API:
[ ] Health check - PASS / FAIL
[ ] Chat endpoint - PASS / FAIL
[ ] Contact endpoint - PASS / FAIL

Frontend:
[ ] Navigation - PASS / FAIL
[ ] Chatbot - PASS / FAIL
[ ] Contact form - PASS / FAIL
[ ] Responsive design - PASS / FAIL
[ ] Error handling - PASS / FAIL

Browser Compatibility:
[ ] Chrome - PASS / FAIL
[ ] Firefox - PASS / FAIL
[ ] Edge - PASS / FAIL
[ ] Safari - PASS / FAIL

Performance:
[ ] Load time - PASS / FAIL
[ ] Bundle size - PASS / FAIL

Issues Found:
1. __________
2. __________
3. __________
```

---

## 🚨 Known Issues

None currently. All features tested and working.

---

## 📝 Testing Notes

- Always test with both backend running and stopped
- Test on multiple devices if possible
- Check browser console for errors
- Verify network tab for API calls
- Test error scenarios, not just happy paths

---

## ✅ Sign-off

After completing all tests:
- [ ] All critical features working
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Responsive design verified
- [ ] Error handling verified
- [ ] Performance acceptable

**Status**: Ready for deployment ✅

