// صفحة خريطة التقدم
import ProgressTimeline from '../components/ProgressTimeline';

const Progress = () => {
  const events = ['بدأت عادة جديدة', 'أكملت أسبوع', 'حققت هدف!'];
  return (
    <div className="p-4">
      <ProgressTimeline events={events} />
    </div>
  );
};

export default Progress;
