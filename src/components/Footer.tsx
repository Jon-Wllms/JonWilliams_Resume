import { resumeData } from '@/data/resume-data';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = resumeData;

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Website"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
