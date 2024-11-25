"use client"
import { motion } from 'framer-motion';
import { experiences } from '../../../data/experiences';
import Timeline from '../components/timeline/Timeline';

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </motion.h1>
      <Timeline items={experiences} />
    </div>
  );
}
ExperiencesPage.displayName = 'ExperiencesPage';