import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';

// 定义消息类型
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '你好！我是胡步兴的 AI 助手。你可以问我关于他的技能、项目经验或联系方式！' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // 核心：调用 DeepSeek API
  const callDeepSeek = async (userMessage: string) => {
    // 读取环境变量
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;

    if (!apiKey) {
      return "配置错误：未找到 VITE_DEEPSEEK_API_KEY，请在 Cloudflare 环境变量中添加。";
    }

    try {
      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "deepseek-chat", // 使用 DeepSeek V3 模型
          messages: [
            { 
              role: "system", 
              content: "你是一个专业的简历助手。你的任务是向招聘者介绍'胡步兴'。请根据他的简历内容回答问题。如果被问到简历没写的信息，请礼貌建议对方通过邮件联系。语气要专业、积极。" 
            },
            // 把历史聊天记录也发过去，这样 AI 才有上下文记忆
            ...messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage }
          ],
          temperature: 0.7, // 0.7 比较平衡，既有创造力又不会乱说
          stream: false
        })
      });

      const data = await response.json();
      
      if (data.error) {
        console.error("DeepSeek Error:", data.error);
        return `AI 出错了: ${data.error.message}`;
      }

      return data.choices[0].message.content;

    } catch (error) {
      console.error("Network Error:", error);
      return "网络连接有点问题，请检查您的网络或稍后再试。";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    // 先把用户的消息显示在界面上
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    // 请求 AI
    const aiResponse = await callDeepSeek(userMsg);

    // 把 AI 的回复显示在界面上
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* 聊天窗口 */}
      {isOpen && (
        <div className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px] animate-in slide-in-from-bottom-5 duration-300">
          {/* 顶部标题 */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">DeepSeek 简历助手</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 消息内容区 */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 min-h-[300px] max-h-[300px]">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-xs text-slate-500">DeepSeek 正在思考...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入框 */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="请输入问题..."
                className="flex-1 px-4 py-2 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 右下角悬浮按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-2">
            召唤 AI
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
