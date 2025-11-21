import React from 'react';
import { GraduationCap, Award as AwardIcon, Calendar } from 'lucide-react';
import { PERSONAL_INFO, AWARDS } from '../data/resumeData';

const EducationAwards: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-full text-primary">
                  <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">教育经历</h2>
             </div>

             <div className="relative border-l-2 border-blue-100 pl-8 ml-4 py-2">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2 border-4 border-white shadow-sm"></div>
                
                <h3 className="text-xl font-bold text-gray-900">{PERSONAL_INFO.education.school}</h3>
                <p className="text-lg text-gray-700">{PERSONAL_INFO.education.degree}</p>
                
                <div className="flex items-center text-gray-500 my-2">
                  <Calendar size={16} className="mr-2" />
                  {PERSONAL_INFO.education.period}
                </div>

                <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <p className="text-sm font-semibold text-gray-700 mb-1">绩点 (GPA): <span className="text-primary">{PERSONAL_INFO.education.gpa}</span></p>
                   <div className="flex flex-wrap gap-2 mt-2">
                      {PERSONAL_INFO.education.highlights.map((h, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                          {h}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Awards Column */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <AwardIcon size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">荣誉奖项</h2>
             </div>

             <div className="space-y-4">
                {AWARDS.map((award) => (
                  <div key={award.id} className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-2 h-12 rounded-full mr-4 ${
                      award.level === '国家级' ? 'bg-red-500' : 
                      award.level === '省级' ? 'bg-blue-500' : 'bg-gray-400'
                    }`}></div>
                    <div>
                       <h4 className="font-bold text-gray-900">{award.title}</h4>
                       <p className="text-sm text-gray-500">{award.organization}</p>
                       <p className="text-xs text-gray-400 mt-1">{award.date}</p>
                    </div>
                    <span className={`ml-auto px-3 py-1 text-xs font-bold rounded-full ${
                       award.level === '国家级' ? 'bg-red-50 text-red-600' : 
                       award.level === '省级' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {award.level}
                    </span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationAwards;