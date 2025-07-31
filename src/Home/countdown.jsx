import React, { useState, useEffect } from "react";
import "./CountDownTimer.css"; // optional CSS for styling

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-20T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft.days && !timeLeft.hours) {
    return <h2 className="expired-text">🎉 Countdown Over! Get Ready for TEDx!</h2>;
  }

  return (
    <div className="countdown-wrapper">
      <h2 className="countdown-heading">Countdown to TEDxHITAM!</h2>
      <p className="countdown-subtext">⏳ Time left until September 20, 2025</p>
      <div className="countdown-box">
        <div><span>{timeLeft.days}</span><small>Days</small></div>
        <div><span>{timeLeft.hours}</span><small>Hours</small></div>
        <div><span>{timeLeft.minutes}</span><small>Minutes</small></div>
        <div><span>{timeLeft.seconds}</span><small>Seconds</small></div>
      </div>
      <button style={{background:"red",padding:'5px 20px 5px',marginTop:'20px',borderRadius:'20px',color:'aliceblue',border:'solid'}}>Grab Your Passes Now</button>
    </div>
  );
};

export default CountdownTimer;
