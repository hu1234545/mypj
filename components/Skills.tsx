import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../data/resumeData';
import { Cpu, Terminal, CircuitBoard, Wifi, Layers, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case '编程语言': return <Terminal className="text-blue-500" />;
      case '硬件平台': return <CircuitBoard className="text-green-500" />;
      case '硬件技能': return <CircuitBoard className="text-green-600" />;
      case '通信协议': return <Wifi className="text-purple-500" />;
      case '操作系统': return <Cpu className="text-red-500" />;
      case '数据库': return <Database className="text-yellow-500" />;
      case '工具': return <Wrench className="text-gray-600" />;
      default: return <Layers className="text-gray-500" />;
    }
  };

  // Group skills by category for the list view
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">专业技能</h2>
          <p className="mt-4 text-xl text-gray-500">软硬结合，具备扎实的嵌入式系统开发能力</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Column */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="熟练度"
                  dataKey="level"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* List Column */}
          <div className="space-y-8">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {getIcon(category)}
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm text-slate-700 font-medium shadow-sm flex items-center gap-2"
                    >
                      {skill.name}
                      <span className="block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;