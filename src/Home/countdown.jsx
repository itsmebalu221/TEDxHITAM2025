import React, { useState, useEffect } from 'react';
import './countdown.css';

const padWithZero = (num) => String(num).padStart(2, '0');

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-20T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-body">
      <div className="countdown-wrapper">
        {isExpired ? (
          <h2 className="expired-text">🎉 Welcome to TEDx!</h2>
        ) : (
          <>
            <h2 className="countdown-heading">Countdown to TEDxHITAM 3.0</h2>
            <p className="countdown-subtext">⏳ Time left to discover what's hidden in plain sight.</p>
            <div className="countdown-box">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div className="time-segment" key={unit}>
                  <span className="time-value">{padWithZero(timeLeft[unit])}</span>
                  <small className="time-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
                </div>
              ))}
            </div>
            <button className="cta-button">Grab Your Passes Now</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;