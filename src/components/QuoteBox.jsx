// صندوق اقتباس اليوم
const QuoteBox = ({ quote, onRefresh }) => (
  <div className="bg-blue-50 rounded shadow p-4 flex items-center justify-between mb-4">
    <span className="italic">{quote}</span>
    <button onClick={onRefresh} className="bg-blue-600 text-white px-3 py-1 rounded">تحديث</button>
  </div>
);

export default QuoteBox;
