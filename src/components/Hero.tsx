'use client';

import { resumeData } from '@/data/resume-data';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Optional */}
          {personalInfo.profileImage && (
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>
          )}
          
          <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={18} />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {personalInfo.location}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-900 dark:text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
