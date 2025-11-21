import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, AWARDS } from "../data/resumeData";

// Construct a context string from the data
const RESUME_CONTEXT = `
你是一个为胡步兴（Hu Buxing）的个人作品集网站服务的AI助手。
你的目标是根据以下信息严格回答有关他的职业背景、技能和项目的问题。
请保持专业、简洁和热情。如果用户询问联系方式，请直接提供。
请使用中文回答问题。

个人信息:
姓名: ${PERSONAL_INFO.name}
职位: ${PERSONAL_INFO.title}
邮箱: ${PERSONAL_INFO.email}
电话: ${PERSONAL_INFO.phone}
自我评价: ${PERSONAL_INFO.about}
教育背景: ${PERSONAL_INFO.education.degree} 就读于 ${PERSONAL_INFO.education.school}, 绩点 ${PERSONAL_INFO.education.gpa}。

技能:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

项目经历:
${PROJECTS.map(p => `
- 项目: ${p.title} (${p.role})
  技术栈: ${p.techStack.join(', ')}
  描述: ${p.description}
  主要成果: ${p.points.join('; ')}
`).join('\n')}

荣誉奖项:
${AWARDS.map(a => `- ${a.title} (${a.level})`).join('\n')}
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Chat features will be disabled.");
    return;
  }
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
      // Attempt init if not done yet
      initGemini();
      if(!aiClient) return "抱歉，AI服务当前不可用（缺少API Key）。";
  }

  try {
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
      }
    });

    return response.text || "我无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "处理您的请求时遇到错误，请稍后再试。";
  }
};