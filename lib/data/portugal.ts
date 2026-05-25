import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "pt-d7",
    name: "D7被动收入居留",
    englishName: "D7 Passive Income Residence Visa",
    summary:
      "面向有稳定被动收入(养老金、租金、投资收益等)的外国人的居留签证；无需在葡萄牙工作，收入须达到葡萄牙最低工资标准。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "收入", value: "月收入须达葡萄牙最低工资(约€820/月，2024年)为主申请人；家属加60%", note: "2024年最低工资约€820/月" },
      { dimension: "其他", value: "须有稳定被动收入来源(养老金/租金/投资收益)", note: "不可依赖葡萄牙内工资收入" },
      { dimension: "金额", value: "须有足够存款证明(建议12个月生活费)", note: "约€9,840以上" },
    ],
    targetAudience: ["退休人士", "有被动收入的财务独立者", "远程有稳定收入者", "不在葡萄牙工作但希望居住者"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约2–4个月",
    keyNotes: [
      "D7为被动收入居留签证，不要求在葡萄牙工作",
      "收入门槛基于葡萄牙最低工资(约€820/月)，家属每人加60%",
      "被动收入来源包括养老金、租金、股息、版权收入等",
      "2年后可续签3年，5年后可申请长期居留或入籍",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-d8",
    name: "D8数字游民签证",
    englishName: "D8 Digital Nomad Visa (Portugal)",
    summary:
      "2022年推出的面向远程工作者与数字游民的居留签证；允许在葡萄牙居住并远程为外国雇主或自雇工作。",
    category: "数字游民签证",
    minRequirements: [
      { dimension: "收入", value: "月收入须达葡萄牙最低工资3倍(约€2,460/月，2024年)", note: "2024年最低工资约€820×3" },
      { dimension: "其他", value: "须为远程工作者/自雇数字游民", note: "须有远程工作合同或自雇证明" },
      { dimension: "学历", value: "无硬性学历要求", note: "但需专业资质或远程工作经验" },
    ],
    targetAudience: ["远程工作者", "自由职业数字游民", "IT与设计领域远程从业者", "为外国公司远程工作的人"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约2–4个月",
    keyNotes: [
      "2022年推出的数字游民签证类别",
      "月收入须达3倍葡萄牙最低工资(约€2,460/月)",
      "可为外国雇主远程工作或自雇",
      "初始签证1年(境外申请)或2年(境内申请)，可续签至5年申请长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-d2",
    name: "D2创业/自雇",
    englishName: "D2 Entrepreneur / Self-employed Visa",
    summary:
      "面向在葡萄牙创业或自雇的外国人的居留签证；须提交商业计划并证明创业对葡萄牙经济有贡献。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "其他", value: "须提交详细商业计划并获得积极评估", note: "须对葡萄牙经济有实质贡献(创造就业等)" },
      { dimension: "金额", value: "无官方最低投资额但须有充足创业资金", note: "实际须足够支撑企业运营" },
      { dimension: "收入", value: "须能维持自身生活(达最低工资标准)", note: "" },
    ],
    targetAudience: ["在葡萄牙创业的企业家", "自雇专业人士", "小企业经营者"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约2–4个月",
    keyNotes: [
      "须提交商业计划并获得积极评估(报告 favorable)",
      "须注册葡萄牙公司或自雇(enquadramento fiscal)",
      "无官方最低投资额但需证明创业可行且有足够资金",
      "2年后可续签3年，5年后可申请长期居留或入籍",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-d3",
    name: "D3高技能/蓝卡",
    englishName: "D3 Highly Qualified / EU Blue Card (Portugal)",
    summary:
      "面向高学历高薪非EU公民的工作居留签证，包含葡萄牙版欧盟蓝卡；薪资须达葡萄牙平均工资1.5倍。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "须达葡萄牙平均工资1.5倍以上(约€2,040/月，2024年)", note: "2024年葡萄牙平均工资约€1,360/月" },
      { dimension: "学历", value: "硕士及以上", note: "或5年渐进式相关专业经验" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
    ],
    targetAudience: ["高技能IT与工程人才", "跨国公司调派员工", "科研与医疗专业人士"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约2–4个月",
    keyNotes: [
      "D3涵盖葡萄牙版欧盟蓝卡，薪资门槛1.5倍平均工资",
      "蓝卡持有者18个月后家属可随行工作",
      "蓝卡可在其他欧盟国家携带转换",
      "5年后可申请长期居留或入籍",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-d4d6",
    name: "D4留学→D6求职",
    englishName: "D4 Study → D6 Job Search Visa",
    summary:
      "在葡萄牙完成学历后可申请D6求职签证寻找工作；D4为留学签证，D6为毕业后求职过渡签证。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "葡萄牙高校学士/硕士/博士", note: "须在葡萄牙认可高校完成" },
      { dimension: "年限", value: "D6求职签证最长9个月", note: "不可续签" },
      { dimension: "金额", value: "留学期间学费+生活费", note: "" },
    ],
    targetAudience: ["葡萄牙高校毕业生", "希望在葡萄牙求职的留学生"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约4–6周",
    keyNotes: [
      "D4留学签证期间可兼职打工(每周20小时，假期全职)",
      "毕业后申请D6求职签证最长9个月",
      "D6期间找到符合D3/D2/D1条件的工作后转换居留",
      "5年后可申请长期居留或入籍",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-golden",
    name: "黄金签证(Golden Visa)",
    englishName: "Autorização de Residência para Investimento (ARI / Golden Visa)",
    summary:
      "葡萄牙黄金签证：2023年关闭房产投资与资本转移通道，但仍开放基金投资(€500K+)与捐赠(文化€250K+/科研€500K+)路径。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "金额", value: "基金投资€500K以上；文化捐赠€250K以上；科研捐赠€500K以上", note: "房产投资通道已于2023年关闭" },
      { dimension: "年限", value: "投资须维持5年以上", note: "每2年须在葡萄牙居住7天(年均14天)" },
      { dimension: "其他", value: "须通过犯罪记录审查与投资来源合规审查", note: "" },
    ],
    targetAudience: ["高净值投资者", "基金投资者", "文化/科研捐赠者"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约6–12个月（2023年后审批大幅放缓）",
    keyNotes: [
      "2023年10月关闭房产投资与资本转移通道，仅剩基金投资与文化/科研捐赠",
      "基金投资门槛€500K以上，须在葡萄牙合规基金中投资",
      "文化捐赠€250K+（艺术/遗产保护），科研捐赠€500K+",
      "居住要求极低：每2年7天(年均14天)，5年后可申请长期居留或入籍",
    ],
    status: "pending_changes",
    lastVerified: "2026-05",
  },
  {
    id: "pt-long-res",
    name: "长期居留5年",
    englishName: "Long-term Residence (Residência Permanente)",
    summary:
      "在葡萄牙连续合法居住5年后可申请长期居留许可；享有与公民几乎等同的工作与居住权利。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年", note: "中断不超过6个月(累计3年内不超过10个月)" },
      { dimension: "收入", value: "稳定收入来源(达最低工资标准)", note: "" },
      { dimension: "其他", value: "无犯罪记录，全面医疗保险，住房条件", note: "" },
    ],
    targetAudience: ["在葡萄牙连续合法居住5年者", "D7/D8/D2/D3长期持有者"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约3–6个月",
    keyNotes: [
      "5年居住期间须连续合法，短暂离境有严格限制",
      "长期居留许可无限期有效(5年一续签行政手续)",
      "持长期居留可自由就业与居住",
      "长期居留是入籍的前提条件",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "pt-citizenship",
    name: "入籍5年",
    englishName: "Naturalisation (Portuguese Citizenship)",
    summary:
      "在葡萄牙合法居住5年(含黄金签证等)后可申请入籍；语言A2水平即可。葡萄牙承认双重国籍，入籍门槛较低。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "合法居住5年", note: "各类居留均可累计(含黄金签证)" },
      { dimension: "语言等级", value: "葡萄牙语A2水平(CIPLE考试)", note: "门槛较低，A2即可" },
      { dimension: "其他", value: "无犯罪记录、融入葡萄牙社会、品行良好", note: "" },
    ],
    targetAudience: ["在葡萄牙合法居住5年者", "黄金签证持有者(5年后)", "D7/D8/D2/D3长期持有者"],
    officialLink: "https://aima.gov.pt",
    processingTime: "约6–18个月",
    keyNotes: [
      "葡萄牙入籍仅需5年合法居住，门槛较低",
      "语言要求仅A2(CIPLE)，是欧盟最低之一",
      "葡萄牙承认双重国籍，入籍后无需放弃原国籍",
      "黄金签证5年后也可申请入籍（尽管房产通道已关闭）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const portugal: CountryData = {
  slug: "portugal",
  country: "葡萄牙",
  englishName: "Portugal",
  region: "西欧",
  overview:
    "葡萄牙以低门槛居留与入籍政策著称：5年入籍、语言仅A2、承认双重国籍。D7被动收入/D8数字游民/D2创业为热门路径。黄金签证2023年关闭房产通道但仍开放基金投资。AIMA为2023年新成立的移民机构取代SEF。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["创业 / 投资路径", "数字游民签证", "高技能人才签证", "留学转永居", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["被动收入/退休人士(D7)", "数字游民(D8)", "高净值基金投资者(Golden Visa)", "5年入籍诉求者", "创业企业家(D2)"],
  residency:
    "5年连续合法居住可申请长期居留；各类居留(D7/D8/D2/D3/Golden Visa)均可累计。黄金签证居住要求极低(年均14天)。",
  citizenship:
    "5年合法居住+葡语A2+无犯罪记录+融入社会；承认双重国籍。门槛为欧盟最低之一。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["AIMA (Agência para a Integração, Migrações e Asilo)", "葡萄牙移民融合与庇护机构官网", "Conservatória do Registo Civil (民事登记局)"]),
};