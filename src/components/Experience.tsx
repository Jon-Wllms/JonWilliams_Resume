import { resumeData } from '@/data/resume-data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((job, index) => (
            <div
              key={job.id}
              className="mb-8 relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.position}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <Briefcase size={18} />
                      {job.company}
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      {job.startDate} - {job.endDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {job.description}
                </p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
