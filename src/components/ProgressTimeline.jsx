// عنصر في شريط التقدم الزمني
const ProgressTimeline = ({ events }) => (
  <div className="flex flex-col gap-4">
    {events.map((e, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-500" />
        <span>{e}</span>
      </div>
    ))}
  </div>
);

export default ProgressTimeline;
