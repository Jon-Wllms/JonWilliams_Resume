'use client';

import { resumeData } from '@/data/resume-data';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:underline">
                  {resumeData.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-blue-100">
                Feel free to reach out for opportunities, collaborations, or just to connect. 
                I&apos;m always open to discussing new projects and ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
