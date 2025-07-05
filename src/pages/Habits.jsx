// صفحة العادات
import HabitItem from '../components/HabitItem';

const Habits = () => {
  const habits = [
    { name: 'شرب الماء', streak: 4 },
    { name: 'رياضة', streak: 2 },
  ];
  return (
    <div className="p-4">
      {habits.map((h, i) => (
        <HabitItem key={i} name={h.name} streak={h.streak} onMarkDone={() => {}} />
      ))}
    </div>
  );
};

export default Habits;
