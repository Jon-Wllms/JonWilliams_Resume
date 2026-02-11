import { resumeData } from '@/data/resume-data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {Object.entries(resumeData.skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-blue-600 dark:border-blue-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
