import { resumeData } from '@/data/resume-data';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          {resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree} in {edu.field}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    <GraduationCap size={18} />
                    {edu.institution}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                </div>
              </div>
              {edu.gpa && (
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <span className="font-semibold">GPA:</span> {edu.gpa}
                </p>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    <Award size={18} />
                    Achievements
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {resumeData.certifications && resumeData.certifications.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {cert.date} {cert.credentialId && `• ID: ${cert.credentialId}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
