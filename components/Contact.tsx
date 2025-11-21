import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">联系我</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              我正在寻找嵌入式软件开发相关的工作机会。
              如果您有任何问题或想讨论潜在的合作，请随时与我联系。
            </p>
            <div className="flex space-x-4">
              {/* Placeholder links */}
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
             <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">邮箱</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
             </div>

             <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">电话</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
                </div>
             </div>

             <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">地点</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
                </div>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hu Buxing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;