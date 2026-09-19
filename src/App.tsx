import React, { useState, useEffect } from 'react';
import { PhoneCall, Mail, Clock, MapPin } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const App: React.FC = () => {
  // Set target relaunch date to 2 weeks from now (14 days)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  const calculateTimeLeft = (): TimeLeft => {
    const diff = +targetDate - +new Date();
    if (diff > 0) {
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const padZero = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="edu-container">
      {/* Background Ambiance */}
      <div className="bg-education-grid"></div>

      {/* Navbar Header */}
      <header className="header-nav glass-card">
        <div className="brand-wrapper">
          <img src="/logo.png" alt="BrightBased Logo" className="brand-logo-img" />
          <div>
            <div className="brand-title">BrightBased</div>
            <div className="brand-subtitle">Educational & Home Tutoring Institute</div>
          </div>
        </div>

        <div className="status-badge">
          <div className="pulse-amber"></div>
          <span>Portal Maintenance</span>
        </div>
      </header>

      {/* Main Under Maintenance Hero */}
      <main className="hero-content">
        <img src="/logo.png" alt="BrightBased Institute Emblem" className="hero-main-logo" />

        <h1 className="hero-h1">
          We're Upgrading Our <span className="gold-gradient-text">Learning Portal</span>
        </h1>

        <p className="hero-p">
          Our website and online student dashboard are currently undergoing scheduled maintenance to bring you a faster tutor matching experience and enhanced learning resources.
        </p>

        {/* 2-Week Countdown Timer */}
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>
            <Clock size={16} color="var(--accent-gold)" /> Estimated Relaunch In (2 Weeks Maintenance)
          </div>
          <div className="timer-row">
            <div className="timer-box">
              <div className="timer-num">{padZero(timeLeft.days)}</div>
              <div className="timer-lbl">Days</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{padZero(timeLeft.hours)}</div>
              <div className="timer-lbl">Hours</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{padZero(timeLeft.minutes)}</div>
              <div className="timer-lbl">Minutes</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{padZero(timeLeft.seconds)}</div>
              <div className="timer-lbl">Seconds</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Contact Details */}
      <footer className="edu-footer">
        <div className="contact-row">
          <a href="tel:+916203844795" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit', textDecoration: 'none' }}>
            <PhoneCall size={16} color="var(--accent-gold)" /> Call / WhatsApp: +91 62038 44795
          </a>
          <a href="mailto:brightbased@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit', textDecoration: 'none' }}>
            <Mail size={16} color="var(--accent-gold)" /> Email: brightbased@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          <MapPin size={14} /> Katihar, Bihar 854103, India
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
          © {new Date().getFullYear()} BrightBased. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
