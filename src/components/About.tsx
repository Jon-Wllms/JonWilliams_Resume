import { resumeData } from '@/data/resume-data';

export default function About() {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-200">What sets me apart:</strong> I don&apos;t just manage technology projects—I build solutions. By combining deep operational expertise with hands-on application development skills (leveraging AI tools like GitHub Copilot), I deliver rapid, custom solutions that directly address business challenges. This unique blend allows me to bridge the gap between operational needs and technical implementation, reducing IT dependency and accelerating time-to-value for critical initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
