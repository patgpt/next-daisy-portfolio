
import Timeline from '../components/Timeline';
 

export default function Experiences() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Experience</h1>
      <Timeline items={experiences} />
    </div>
  );
}