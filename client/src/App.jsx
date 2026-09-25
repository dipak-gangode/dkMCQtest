import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import QuizSetupPage from './pages/QuizSetupPage.jsx';
import QuizPlayPage from './pages/QuizPlayPage.jsx';
import QuizResultPage from './pages/QuizResultPage.jsx';

import './styles/index.css';
import './styles/animations.css';
import './styles/components.css';

export function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/setup" element={<QuizSetupPage />} />
              <Route path="/play" element={<QuizPlayPage />} />
              <Route path="/result" element={<QuizResultPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(6, 9, 17, 0.95)',
            }}
          >
            <div className="container">
              <p>
                <strong>MERN MCQ Challenge</strong> • A knowledgeable Indian coding friend who teaches you,
                celebrates when you are right, and roasts you when you are wrong. 😂
              </p>
              <p style={{ marginTop: '0.4rem', color: 'rgba(255, 255, 255, 0.3)' }}>
                Coding Practice + Gaming + Desi Bhidu Personality + Instant Learning • Zero Admin Panel • 255+ Questions
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
