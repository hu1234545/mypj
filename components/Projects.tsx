import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { Folder, Calendar, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  
  const categories = ['全部', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = activeCategory === '全部' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">项目经历</h2>
          <p className="mt-4 text-xl text-gray-500">丰富的嵌入式与物联网项目实战经验</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md shadow-blue-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-xl text-primary">
                  <Folder size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">{project.role}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                {project.period}
              </div>

              <p className="text-gray-600 mb-6 italic border-l-2 border-gray-200 pl-3">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">主要职责与成果</h4>
                <ul className="space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 size={16} className="mr-2 mt-0.5 text-green-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;