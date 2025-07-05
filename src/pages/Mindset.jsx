// صفحة العقلية
import QuoteBox from '../components/QuoteBox';
import MeditationTimer from '../components/MeditationTimer';
import { useState } from 'react';

const Mindset = () => {
  const [quote, setQuote] = useState('كن إيجابياً اليوم!');
  return (
    <div className="p-4">
      <QuoteBox quote={quote} onRefresh={() => setQuote('اقتباس جديد!')} />
      <MeditationTimer />
      <textarea className="w-full border rounded p-2 mt-4" placeholder="اكتب شيئاً أنت ممتن له اليوم..." />
    </div>
  );
};

export default Mindset;
