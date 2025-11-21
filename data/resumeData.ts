import { Project, Award, Skill } from '../types';

export const PERSONAL_INFO = {
  name: "胡步兴",
  title: "嵌入式系统工程师",
  phone: "17375399941",
  email: "hubuxing2022@163.com",
  location: "中国，安徽滁州",
  education: {
    school: "滁州学院",
    degree: "本科 - 计算机科学与技术",
    period: "2022-09 - 2026-07",
    gpa: "3.38",
    highlights: ["获校级三等奖学金", "优秀班干部", "优秀社干"]
  },
  about: "宝剑锋从磨砺出，梅花香自苦寒来。我是一名计算机科学与技术专业的本科生，拥有扎实的C/C++编程基础，熟悉嵌入式底层驱动编写及RTOS应用。在校期间积极参与智能车竞赛与蓝桥杯，具备独立开发STM32及英飞凌平台项目的经验，并涉足嵌入式Linux应用开发。对待技术充满热情，具有良好的团队协作精神与抗压能力。",
  quote: "宝剑锋从磨砺出，梅花香自苦寒来。"
};

export const SKILLS: Skill[] = [
  { name: "C/C++", level: 95, category: "编程语言" },
  { name: "FreeRTOS", level: 85, category: "操作系统" },
  { name: "STM32 / 英飞凌TC264", level: 90, category: "硬件平台" },
  { name: "嵌入式 Linux", level: 70, category: "操作系统" },
  { name: "数据结构与算法", level: 80, category: "核心技能" },
  { name: "IMU/GPS 融合算法", level: 75, category: "核心技能" },
  { name: "PCB 设计 (嘉立创EDA)", level: 75, category: "硬件技能" },
  { name: "Git / 版本控制", level: 85, category: "工具" },
  { name: "MQTT / 物联网协议", level: 80, category: "通信协议" },
  { name: "MySQL", level: 70, category: "数据库" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "智能车竞赛 - 极速越野组",
    role: "队长",
    period: "2024-11 - 2025-07",
    category: "嵌入式",
    description: "主导基于英飞凌TC264的智能越野小车开发，负责融合算法与运动控制。",
    techStack: ["英飞凌TC264", "C++", "IMU/GPS融合", "PID控制", "互补滤波"],
    points: [
      "主导设计并实现IMU与GPS互补滤波算法，将高速越野状态下的定位误差从100cm降低至±50cm (精度提升50%)。",
      "深入分析电机与舵机特性，编写毫秒级精准控制程序，实现速度与方向闭环，将50米赛道往返时间从50秒缩短至30秒内。",
      "负责路径规划与动态避障算法实现，保障车辆稳定完成10个绕桩任务，并成功跨越3个不同高度障碍物，完赛率达80%。"
    ]
  },
  {
    id: "p2",
    title: "基于STM32的智能家居设备与网络系统",
    role: "队长",
    period: "2025-05 - 2026-06",
    category: "物联网",
    description: "开发一套完整的智能家居监测与控制系统，实现云端互联。",
    techStack: ["STM32F407", "FreeRTOS", "MQTT", "微信小程序"],
    points: [
      "独立完成全流程开发：从硬件选型、外设配置到基于FreeRTOS的多任务软件编程与系统联调。",
      "熟练运用FreeRTOS实现温湿度、光照等多种传感器的并发数据采集与设备自动化控制，系统经测试稳定运行超20小时。",
      "基于MQTT协议打通设备与云平台通信链路，并独立开发微信小程序前端，实现用户对家居设备的远程实时监控与控制。"
    ]
  },
  {
    id: "p3",
    title: "基于STM32室内环境检测系统",
    role: "队长",
    period: "2024-12 - 2025-02",
    category: "物联网",
    description: "设计并实现室内环境实时监测系统，包含声光报警功能。",
    techStack: ["STM32F407", "HAL库", "传感器驱动", "LCD显示"],
    points: [
      "独立编写ADC、GPIO、UART等外设的HAL库驱动程序，优化数据处理流程，实现1秒周期的多路环境数据精准采集与LCD刷新。",
      "设计低延迟报警机制，当监测数据超出阈值时，声光报警响应时间低于500ms。",
      "主导系统稳定性测试，设备在24小时连续压力测试中无数据丢失或误报。"
    ]
  },
  {
    id: "p4",
    title: "智慧康养综合应用开发",
    role: "队长",
    period: "2025-09 - 2025-10",
    category: "嵌入式Linux",
    description: "基于S5P6818开发板的嵌入式Linux综合应用。",
    techStack: ["嵌入式Linux", "C语言", "S5P6818", "科大讯飞SDK", "Framebuffer"],
    points: [
      "从零搭建基于S5P6818的嵌入式Linux交叉编译环境 (Windows + VMware Ubuntu)。",
      "利用C语言和Framebuffer实现1024*600分辨率BMP图片解码与流畅显示；基于madplay开发支持后台播放的MP3播放器。",
      "集成科大讯飞离线语音识别SDK，通过自定义命令实现高达95%识别准确率的语音指令，精准控制硬件LED。"
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "蓝桥杯Java组 国赛三等奖",
    level: "国家级",
    organization: "全国软件和信息技术专业人才大赛组委会",
    date: "2024-06"
  },
  {
    id: "a2",
    title: "蓝桥杯C++组 省赛二等奖",
    level: "省级",
    organization: "全国软件和信息技术专业人才大赛组委会",
    date: "2025-06"
  },
  {
    id: "a3",
    title: "智能车竞赛 省赛二等奖",
    level: "省级",
    organization: "教育部高等学校自动化专业教学指导分委员会",
    date: "2025-07"
  },
  {
    id: "a4",
    title: "英语 CET-4 证书",
    level: "证书",
    organization: "教育部",
    date: "2024-06"
  },
  {
    id: "a5",
    title: "滁州学院三等学生奖学金",
    level: "校级",
    organization: "滁州学院",
    date: "2025-09"
  }
];