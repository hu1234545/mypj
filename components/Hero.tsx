import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* 左侧文字介绍部分 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              求职意向：嵌入式软件开发 / 全职
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              你好，我是 <span className="text-primary">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-6">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-md text-gray-500 italic mb-8 border-l-4 border-primary pl-4">
              "{PERSONAL_INFO.quote}"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                查看项目
              </a>
              {/* 这里是已经修正好的“保存简历”按钮 */}
              <a 
                href="/resume_hubuxing.pdf"
                download="胡步兴-嵌入式软件工程师-简历.pdf"
                className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                保存简历
              </a>
            </div>
          </div>
          
          {/* 右侧图片和浮动卡片部分 */}
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-blue-200 rounded-full -translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-slate-200 rounded-full translate-x-4 -translate-y-4"></div>
              {/* 你可以把这里的图片链接换成你自己的头像或照片URL */}
              <img 
                src="https://raw.githubusercontent.com/hu1234545/mypj/main/src/assets/avatar.jpg" 
                alt="胡步兴" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <div className="absolute top-0 right-0 md:right-10 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <p className="text-sm text-gray-500">平均绩点 (GPA)</p>
              <p className="text-xl font-bold text-gray-800">3.38 / 4.0</p>
            </div>
            <div className="absolute bottom-0 left-0 md:left-10 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
              <p className="text-sm text-gray-500">获奖情况</p>
              <p className="text-xl font-bold text-gray-800">多项国家级/省级奖项</p>
            </div>
          </div>

        </div>
      </div>

      {/* 向下滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hidden lg:block">
        <a href="#skills" aria-label="Scroll to next section">
            <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
