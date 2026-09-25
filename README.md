# 🔥 MERN MCQ Quiz Platform (Bhai Edition)

> **A knowledgeable Indian coding friend who teaches you, celebrates when you are right, and brutally-but-playfully roasts you when you are wrong! 😂**
>
> *Coding Practice + Gaming + Desi Bhidu Personality + Instant Learning*

---

## 🌟 Overview

**MERN MCQ Quiz Platform** is a production-grade interactive learning and examination platform engineered specifically for **MERN Stack, JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Git, REST APIs, Authentication, and Web Fundamentals**.

Unlike traditional boring exam websites, this platform behaves like a coding friend sitting right next to you:
- **Zero Separate Submit Buttons**: The exact moment you tap an option, it locks, evaluates authoritatively on the server, reveals the correct answer, delivers a **Bhai-style roast/reaction**, gives a concise Hinglish concept breakdown, and equips you with a **Desi Memory Trick (🧠 Yaad Rakh Bhidu)**!
- **Strict Guardrails**: Humorous Hinglish teasing without any sexual content, protected-group slurs, or identity attacks. Roasts specifically target the coding slip-up.
- **Gaming Rewards**: Virtual **Cores (💎)** and **Streaks (🔥)** with multiplier bonuses.
- **Authoritative Server Security**: Answers and explanations are NEVER sent with initial question batches.
- **Zero Admin Panel**: Maintained entirely through clean seed datasets.

---

## 🚀 Key Features

1. **Instant Answer Evaluation & Roast Engine**:
   - Level 1 Light Roast (0–1 mistakes)
   - Level 2 Medium / Strong Roast (2–3 consecutive mistakes)
   - Level 3 Heavy Roast (4+ consecutive mistakes)
   - Streak & Comeback reactions (celebrates when breaking out of mistake streaks)
2. **255+ Curated Questions**:
   - 12 Topics: JavaScript (40), React (30), Node.js (20), Express (20), MongoDB (20), MERN Fullstack (20), HTML (20), CSS (20), Web Fundamentals (20), Git/GitHub (15), REST APIs (15), Authentication (15).
   - Code output prediction challenges and practical job interview questions.
3. **Desi Memory Tricks (🧠)**:
   - Catchy analogies for tricky web development concepts (e.g. `PUSH = Andar daal, POP = Bahar nikaal`, `Closure = Ghar chhod diya par chaabi jeb mein hai`).
4. **Comprehensive Result & Mistake Post-Mortem**:
   - Performance Personality Badges:
     - 0–20%: **Code Aloo 🥔**
     - 21–40%: **Syntax Bachha 🐣**
     - 41–60%: **Junior Bhidu 😎**
     - 61–80%: **Code Warrior 🔥**
     - 81–95%: **MERN Machine 🚀**
     - 96–100%: **Full Stack Don 👑**
   - **Weak Topics Analysis & "Weak Topics Phodo 🔥" CTA**: Directly initiates a targeted quiz on areas where you faltered.
   - **Wrong Answer Review**: Expandable accordion detailing your selection, correct answer, bhai roast, why your answer was wrong, and why the correct answer is right.
5. **Practice & Timed Modes**:
   - Practice Mode: Stress-free learning with no timer.
   - Timed Mode: 1-minute countdown per question with auto-finish.
6. **Built-in Web Audio Feedback**:
   - Native browser Web Audio API sounds for correct answers, wrong buzzers, and streak fanfare with global mute toggle.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18+ (Vite)
- **Language**: JavaScript (ES Modules)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Celebration FX**: Canvas Confetti
- **Styling**: Modern Vanilla CSS Design System with CSS Tokens, Glassmorphism, and responsive CSS Grid/Flexbox (Dark Developer + Gaming theme).
- **Audio**: Web Audio API (Synthesized chimes).

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js (ES Modules)
- **Database**: MongoDB & Mongoose ODM
- **Security**: Helmet, CORS, Express-Rate-Limit, NoSQL Injection Sanitization.
- **Testing**: Node.js native test runner (`node:test`, `node:assert`) + Supertest.

---

## 📂 Project Architecture

```text
MERN Quiz/
├── package.json                   # Root orchestrator scripts
├── README.md                      # Comprehensive documentation
│
├── server/                        # Express + MongoDB Backend
│   ├── package.json
│   ├── .env.example
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # Mongoose DB connection
│   │   ├── controllers/
│   │   │   ├── quizController.js  # startQuiz, submitAnswer, finishQuiz
│   │   │   └── topicController.js # getTopics, getStats
│   │   ├── middleware/
│   │   │   ├── errorHandler.js    # 404 & centralized error handler
│   │   │   └── rateLimiter.js     # API rate limiting
│   │   ├── models/
│   │   │   ├── Question.js        # Question schema with answer security
│   │   │   └── QuizSession.js     # Server-authoritative session state
│   │   ├── routes/
│   │   │   ├── quizRoutes.js      # /api/quiz/*
│   │   │   └── topicRoutes.js     # /api/topics/*
│   │   ├── services/
│   │   │   └── roastEngine.js     # Bhai Roast & Reaction engine
│   │   ├── utils/
│   │   │   └── helpers.js         # Shuffling, Cores, Badges math
│   │   ├── validators/
│   │   │   └── quizValidator.js   # Input validation & NoSQL sanitization
│   │   ├── app.js                 # Express app configuration
│   │   └── server.js              # Server entry point
│   ├── seed/
│   │   ├── questions/             # 255+ Curated questions across 12 files
│   │   │   ├── html.js (20)
│   │   │   ├── css.js (20)
│   │   │   ├── javascript.js (40)
│   │   │   ├── react.js (30)
│   │   │   ├── nodejs.js (20)
│   │   │   ├── express.js (20)
│   │   │   ├── mongodb.js (20)
│   │   │   ├── mern.js (20)
│   │   │   ├── git.js (15)
│   │   │   ├── restApi.js (15)
│   │   │   ├── auth.js (15)
│   │   ├── import300Questions.js  # 300 JSON questions deduplication importer
│   │   └── seedDatabase.js        # Duplicate-detecting validation seeder
│   └── test/
│       └── quiz.test.js           # Comprehensive automated API tests
│
└── client/                        # React + Vite Frontend
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── public/
    │   ├── robots.txt
    │   └── sitemap.xml
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── TopicCard.jsx
        │   ├── DifficultySelector.jsx
        │   ├── QuizHeader.jsx
        │   ├── ProgressBar.jsx
        │   ├── QuestionCard.jsx
        │   ├── AnswerOption.jsx
        │   ├── AnswerFeedback.jsx
        │   ├── ReactionMessage.jsx
        │   ├── ExplanationCard.jsx
        │   ├── MemoryTrick.jsx
        │   ├── NextQuestionButton.jsx
        │   ├── CoreCounter.jsx
        │   ├── StreakBadge.jsx
        │   ├── ResultSummary.jsx
        │   ├── WrongAnswerReview.jsx
        │   ├── TopicPerformance.jsx
        │   ├── LoadingState.jsx
        │   ├── ErrorState.jsx
        │   └── EmptyState.jsx
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── QuizSetupPage.jsx
        │   ├── QuizPlayPage.jsx
        │   └── QuizResultPage.jsx
        ├── context/
        │   └── QuizContext.jsx
        ├── services/
        │   └── api.js
        ├── utils/
        │   └── soundEffects.js
        ├── styles/
        │   ├── index.css
        │   ├── animations.css
        │   └── components.css
        ├── App.jsx
        └── main.jsx
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- **Node.js**: v20.0.0 or higher (`node -v`)
- **MongoDB**: Running instance locally on `mongodb://127.0.0.1:27017` or MongoDB Atlas URI.

### 1. Clone & Install Dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 2. Configure Environment Variables
Inside `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mern_quiz_db
CLIENT_URL=http://localhost:5173
JWT_SECRET=super_secret_jwt_key_bhai_quiz_platform_2026
NODE_ENV=development
```

### 3. Seed Database
Execute the database seeder to populate all 255 questions:
```bash
npm run seed
# Or from server folder:
cd server && npm run seed
```

### 4. Run Automated Tests
```bash
cd server && npm test
```

### 5. Launch Development Servers
Run concurrently or in separate terminals:

**Backend Server (Port 5000):**
```bash
cd server
npm run dev
```

**Frontend Client (Port 5173):**
```bash
cd client
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## 📡 API Documentation

### 1. `GET /api/topics`
Returns list of all available topics with question counts, available difficulties, and UI theme metadata.

### 2. `GET /api/quiz/questions`
Query Parameters:
- `topic`: e.g. `javascript`, `react`, or `mixed` (or comma-separated for weak topics)
- `difficulty`: `easy`, `medium`, `hard`, `interview`, or `mixed`
- `count`: `10`, `20`, `30`, `50`
- `mode`: `practice` or `timed`

**Security Guarantee:** Response contains only sanitized question text, code snippets, and randomized options. Answers and explanations are NEVER leaked!

### 3. `POST /api/quiz/answer`
Submits an answer for instant server evaluation.
```json
{
  "sessionId": "UUID",
  "questionId": "ObjectId",
  "selectedOptionId": "b",
  "timeSpentMs": 4200
}
```
**Response:**
```json
{
  "success": true,
  "correct": false,
  "selectedOptionId": "a",
  "selectedOptionText": "pop()",
  "correctOptionId": "b",
  "correctOptionText": "push()",
  "reaction": "😂 ARRE BHADWE KYA KAR RAHA HAI, JARA DIMAG CHALA!",
  "explanation": "`push()` array ke end mein item add karta hai.",
  "optionExplanation": "pop() array ke end se item remove karta hai.",
  "whySelectedWrong": "pop() array ke end se item remove karta hai.",
  "whyCorrectRight": "push() array ke end mein element insert karta hai.",
  "memoryTrick": "PUSH = Andar daal! POP = Bahar nikaal!",
  "score": 0,
  "streak": 0,
  "bestStreak": 0,
  "cores": 0,
  "earnedCores": 0,
  "isLastQuestion": false
}
```

### 4. `POST /api/quiz/finish`
Finalizes the session, determines final accuracy, assigns the Bhai Performance Badge, and computes the weak topics breakdown and wrong answer review list.

---

## 🔒 Security Hardening

- **Helmet**: Configures protective HTTP response headers against clickjacking, MIME sniffing, and cross-site scripting.
- **CORS**: Enforces origin restrictions.
- **Express Rate Limiting**: Mitigates brute-force attacks and abuse.
- **NoSQL Injection Defense**: Sanitizes request queries and bodies.
- **Authoritative Server Scoring**: Clients cannot forge scores, streaks, or currency rewards.
- **Answer Obfuscation**: Correct option IDs are excluded at the schema level (`select: false`).

---

## 🚀 Deploying to Vercel

This repository is configured for zero-configuration, seamless fullstack deployment on [Vercel](https://vercel.com).

### Deployment Architecture on Vercel:
- **Frontend**: Built via Vite into `client/dist`, served statically via Vercel's global CDN with SPA client routing.
- **Backend API**: Powered by Vercel Serverless Functions (`api/index.js`), routing all `/api/*` traffic through Express with cached MongoDB connection pooling.

### Step-by-Step Vercel Deployment:

1. **Push your code to GitHub / GitLab / Bitbucket**:
   ```bash
   git add .
   git commit -m "Configure fullstack Vercel deployment"
   git push origin main
   ```

2. **Import Project into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository.
   - Framework Preset: Leave as **Other** (configured automatically via `vercel.json`).
   - Root Directory: `./` (leave default).

3. **Configure Environment Variables in Vercel**:
   Add the following in **Project Settings -> Environment Variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string:
     `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/mern_quiz_db?retryWrites=true&w=majority`
   - `NODE_ENV`: `production`

4. **Seed Database (One-time)**:
   Ensure your MongoDB Atlas cluster has network access enabled (`0.0.0.0/0` in Atlas Network Access).
   Run the database seeder locally once pointing to your Atlas URI:
   ```bash
   MONGODB_URI="your-atlas-uri" npm run seed
   ```

5. **Hit Deploy! 🚀**:
   Vercel will build the frontend into `client/dist` and expose the Express API under `/api/*` automatically!

---

## 📄 License
MIT License. Built with ❤️ and Desi Bhai Swag for Indian & Global Developers!
"# dkMCQtest" 
