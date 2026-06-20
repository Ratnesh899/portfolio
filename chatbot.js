const responses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    reply: "Hello! I'm Ratnesh's AI assistant. How can I help you today? Feel free to ask about his skills, projects, or experience!",
  },
  {
    keywords: ['who', 'about', 'ratnesh', 'tell me'],
    reply: "Ratnesh Mishra is a Backend Developer and B.Tech CSE AI & ML student. He specializes in Node.js, Express.js, PostgreSQL, and REST APIs. He's passionate about building scalable backend systems and AI-powered tools, and also offers freelance backend development services.",
  },
  {
    keywords: ['skill', 'expertise', 'technolog', 'tech stack', 'stack'],
    reply: "Ratnesh's key skills:\n• Backend: Node.js (90%), Express.js (90%), REST APIs (85%), MVC (80%)\n• Database: PostgreSQL (85%), SQL (80%), Drizzle ORM (75%)\n• Tools: Git/GitHub (85%), Postman (90%), Docker (65%)\n• Languages: JavaScript (90%), Java (70%), Python (70%)\n• Frontend: HTML (85%), CSS (80%), DOM (80%)",
  },
  {
    keywords: ['project', 'work', 'built'],
    reply: "Ratnesh has built 5 major projects:<br><br>1. <b>Gym Management Full-Stack SaaS</b> (⭐ Featured) — Full-stack gym platform with members, trainers, attendance, UPI payments, invoices, AI diet planner, and real-time updates. Stack: React, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL, Drizzle ORM, Socket.IO, Groq AI.<br><br>2. <b>Gym Management API</b> (⭐ Featured) — Backend API for managing gym members, trainers, classes, attendance, and memberships. Stack: Node.js, Express.js, PostgreSQL, Drizzle ORM, Docker.<br><br>3. <b>Express Book Store API</b> (⭐ Featured) — RESTful Book Store API with CRUD, search, database relationships, and MVC structure. Stack: Node.js, Express.js, PostgreSQL, Drizzle ORM.<br><br>4. <b>Pacman Java Game</b> — Java-based Pacman game with keyboard controls, collision detection, enemy movement, scoring, and game loop. Stack: Java, OOP, Swing/AWT.<br><br>5. <b>Mini College Project – Diabetes Prediction Web App</b> — Basic ML web app predicting diabetes risk with confidence score. Stack: Python, Flask, scikit-learn, pandas.",
  },
  {
    keywords: ['book store', 'bookstore', 'book'],
    reply: "The <b>Express Book Store API</b> (⭐ Featured) is a RESTful backend API with books and authors CRUD operations, PostgreSQL database, Drizzle ORM, foreign key relationships, search API, and MVC structure. Built with Node.js, Express.js, PostgreSQL, Drizzle ORM, and tested with Postman.",
  },
  {
    keywords: ['gym', 'management', 'gym management'],
    reply: "Ratnesh has built two gym-related projects:<br><br>1. <b>Gym Management Full-Stack SaaS</b> (⭐ Featured) — Full-stack platform with members, trainers, attendance, UPI payments, invoices, AI diet planner, and real-time updates. Stack: React, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL, Drizzle ORM, Socket.IO, Groq AI.<br><br>2. <b>Gym Management API</b> (⭐ Featured) — Backend API for gym members, trainers, classes, attendance, plans, and memberships. Stack: Node.js, Express.js, PostgreSQL, Drizzle ORM, Docker.",
  },
  {
    keywords: ['pacman', 'java game', 'pac-man'],
    reply: "The <b>Pacman Java Game</b> is a Java-based recreation of the classic Pacman arcade game with keyboard controls, collision detection, enemy AI movement, scoring system, and a game loop. Built with Java, OOP principles, and Swing/AWT for graphics.",
  },
  {
    keywords: ['diabetes', 'prediction', 'ml', 'machine learning'],
    reply: "The <b>Mini College Project – Diabetes Prediction Web App</b> is a basic college ML project that predicts diabetes risk using health input data and displays a confidence score. Built with Python, Flask, scikit-learn, and pandas.",
  },
  {
    keywords: ['service', 'offer', 'freelance', 'hire'],
    reply: "Ratnesh offers freelance backend development services:\n• REST API Development\n• Backend Bug Fixing\n• Database Design (PostgreSQL)\n• Postman API Testing\n• API Documentation\n• Admin Panel Backend<br><br>Reach him at <b>ratneshmishra497@gmail.com</b> to discuss your project!",
  },
  {
    keywords: ['contact', 'email', 'reach', 'message'],
    reply: "You can reach Ratnesh via:<br>• Email: <b>ratneshmishra497@gmail.com</b><br>• GitHub: <a href='https://github.com/Ratnesh899' target='_blank'>github.com/Ratnesh899</a><br>• LinkedIn: <a href='https://www.linkedin.com/in/ratnesh-mishra-595a00312/' target='_blank'>linkedin.com/in/ratnesh-mishra</a><br><br>Or use the contact form on this page!",
  },
  {
    keywords: ['experience', 'background', 'education', 'student', 'learn'],
    reply: "Ratnesh is a B.Tech CSE AI & ML student whose learning path went: JavaScript & DOM → Node.js servers → Express.js & REST APIs → Express Book Store API → Gym Management Full-Stack SaaS → Gym Management API → Pacman Java Game → Diabetes ML App. He's currently focused on full-stack development and scalable backend systems.",
  },
  {
    keywords: ['resume', 'cv', 'download'],
    reply: "Click the <b>'Download Resume'</b> button on the hero section of this portfolio to get Ratnesh's resume!",
  },
];

function findReply(message) {
  const msg = message.toLowerCase();

  for (const item of responses) {
    for (const kw of item.keywords) {
      if (msg.includes(kw)) {
        return item.reply;
      }
    }
  }

  return "I'm not sure about that. I can answer questions about Ratnesh's skills, projects, services, and experience. Try asking something like <i>'What are his skills?'</i> or <i>'Tell me about his projects!'</i>";
}

function createChatWidget() {
  const container = document.createElement('div');
  container.id = 'chatbot';
  container.innerHTML = `
    <button class="chatbot-toggle" id="chatToggle" aria-label="Open chat">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
    <div class="chatbot-panel" id="chatPanel">
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <div class="chatbot-avatar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
              <path d="M2 22v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2"/>
            </svg>
          </div>
          <div>
            <div class="chatbot-title">Ratnesh AI</div>
            <div class="chatbot-status">Online</div>
          </div>
        </div>
        <button class="chatbot-close" id="chatClose" aria-label="Close chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="chatbot-messages" id="chatMessages">
        <div class="chatbot-message bot">
          <div class="message-content">Hi! I'm Ratnesh's AI assistant. Ask me about his skills, projects, or anything from his portfolio!</div>
        </div>
      </div>
      <div class="chatbot-input-area">
        <input type="text" class="chatbot-input" id="chatInput" placeholder="Type a message..." autocomplete="off">
        <button class="chatbot-send" id="chatSend" aria-label="Send message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(container);
}

function addMessage(text, role) {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chatbot-message ${role}`;
  const content = document.createElement('div');
  content.className = 'message-content';
  if (role === 'user') {
    content.textContent = text;
  } else {
    content.innerHTML = text;
  }
  div.appendChild(content);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chatbot-message bot typing-indicator';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="message-content"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function sendMessage(text) {
  if (!text.trim()) return;

  addMessage(text, 'user');
  document.getElementById('chatInput').value = '';

  showTyping();

  setTimeout(() => {
    removeTyping();
    const reply = findReply(text);
    addMessage(reply, 'bot');
  }, 600 + Math.random() * 400);
}

function initChat() {
  createChatWidget();

  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const close = document.getElementById('chatClose');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', isOpen);
    if (isOpen) input.focus();
  });

  close.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  });

  send.addEventListener('click', () => sendMessage(input.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage(input.value);
  });
}

document.addEventListener('DOMContentLoaded', initChat);
