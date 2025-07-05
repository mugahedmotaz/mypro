// مؤقت التأمل
import { useState } from "react";

const MeditationTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const start = () => { setActive(true); setSeconds(60); };
  React.useEffect(() => {
    if (!active || seconds === 0) return;
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    if (seconds === 1) setActive(false);
    return () => clearTimeout(timer);
  }, [active, seconds]);
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <div className="text-2xl mb-2">{seconds}s</div>
      <button onClick={start} className="bg-blue-600 text-white px-4 py-1 rounded">ابدأ التأمل</button>
    </div>
  );
};

export default MeditationTimer;
