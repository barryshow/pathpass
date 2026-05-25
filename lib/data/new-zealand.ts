import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "nz-smc",
    name: "独立技术移民SMC",
    englishName: "Skilled Migrant Category (SMC)",
    summary:
      "新西兰核心技术移民通道，基于6分制(point system)：从职业注册/学历/收入中获得最高3分，每在新西兰从事技能工作1年加1分，达到6分即可申请。",
    category: "技术移民",
    minRequirements: [
      { dimension: "其他", value: "6分制须达到6分", note: "职业注册/学历/收入3分 + 技能工作经验每1年1分" },
      { dimension: "学历", value: "学士3分/硕士3分/PhD 3分（或职业注册3分/高收入3分）", note: "三者取最高分" },
      { dimension: "收入", value: "若以收入获得3分须达1.5倍中位工资(约NZ$97,500/年)", note: "2024年中位工资约NZ$65,000" },
      { dimension: "语言等级", value: "IELTS 6.0整体", note: "或同等英语成绩" },
      { dimension: "年龄", value: "55岁以下", note: "" },
    ],
    targetAudience: ["IT与软件工程师", "医疗专业人员", "工程师", "在新西兰已有技能工作经验者"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/your-skilled-migrant-category-visa-application",
    processingTime: "约4–8个月",
    keyNotes: [
      "2023年10月改革后采用6分制，不再使用旧160分/180分系统",
      "需在新西兰有技能工作(skilled employment)或offer",
      "技能工作每年1分，最多3分；加上基础3分构成6分",
      "年龄55岁以下方可申请",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-silverfern",
    name: "银蕨签证",
    englishName: "Silver Fern Job Search Work Visa",
    summary:
      "面向年轻高技能求职者的工作搜索签证，允许在新西兰9个月内寻找技能工作；找到后可转为Silver Fern Practical Experience签证工作2年，再转SMC。",
    category: "技术移民",
    minRequirements: [
      { dimension: "年龄", value: "20–35岁", note: "严格年龄限制" },
      { dimension: "学历", value: "学士及以上", note: "须为认可学历" },
      { dimension: "语言等级", value: "IELTS 6.5整体", note: "或同等英语成绩" },
      { dimension: "金额", value: "须有足够资金支持在新西兰9个月生活", note: "约NZ$4,200以上" },
    ],
    targetAudience: ["年轻(20–35)高技能求职者", "IT与工程专业毕业生", "希望在NZ寻找机会的青年人才"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/visas/silver-fern-job-search-work-visa",
    processingTime: "约4–6周",
    keyNotes: [
      "全球名额有限（通常300个/年），竞争激烈",
      "9个月求职签证找到技能工作后可申请2年Silver Fern Practical Experience签证",
      "2年工作经验可作为SMC申请加分依据",
      "该签证不可续签，需在期限内完成转换",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-aewv",
    name: "雇主认证工作签证AEWV",
    englishName: "Accredited Employer Work Visa (AEWV)",
    summary:
      "2022年起取代原Essential Skills工作签证的新体系；雇主须先获移民局认证(accredited)，外国人才可在认证雇主下工作。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "职业类别", value: "须为认证雇主的岗位", note: "雇主须已获INZ认证(accredited)" },
      { dimension: "收入", value: "中位工资以上(约NZ$65,000/年)为技能工作；低于中位为非技能", note: "影响后续SMC申请资格" },
      { dimension: "语言等级", value: "视岗位要求而定，部分需IELTS 4.0+", note: "" },
    ],
    targetAudience: ["有新西兰雇主offer的技能工作者", "跨国公司调派员工", "行业紧缺职业从业者"],
    officialLink: "https://www.immigration.govt.nz/employ-migrants/new-employer-accreditation-and-work-visa",
    processingTime: "雇主认证约4–8周；签证约2–4周",
    keyNotes: [
      "雇主需先完成认证(accredited)方可雇佣外国人",
      "薪资达到中位工资以上的为技能工作，可计入SMC经验分",
      "低于中位工资的为非技能工作，不可计入SMC且签证续签受限",
      "AEWV最长3年（非技能最长2年）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-study",
    name: "留学Post-Study→技术移民",
    englishName: "Post-Study Work Visa → SMC",
    summary:
      "在新西兰完成指定学历后可申请Post-Study Work Visa(1–3年，视学历等级)，期间积累技能工作经验后申请SMC。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "新西兰Level 7及以上学历（学士/硕士/博士）", note: "Level 4–6也可申请但签证时长更短" },
      { dimension: "年限", value: "Post-Study签证1–3年视学历等级", note: "PhD 3年/Master 2年/Bachelor 1年" },
      { dimension: "金额", value: "留学期间学费+生活费", note: "须满足留学签证资金要求" },
    ],
    targetAudience: ["新西兰高校毕业生", "希望在NZ积累工作经验的留学生", "STEM领域毕业生"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/visas/post-study-work-visa",
    processingTime: "约4–6周",
    keyNotes: [
      "Post-Study签证期间须从事技能工作方可积累SMC所需经验分",
      "PhD毕业生获3年签证，Master 2年，Bachelor(Honours)1年",
      "非学位(Level 4–6)课程毕业生签证最长1年",
      "在Post-Study期间找到中位工资以上技能工作是SMC的关键",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-entrepreneur",
    name: "创业Entrepreneur→永居",
    englishName: "Entrepreneur Work Visa → Residence",
    summary:
      "面向在新西兰创办或购买企业的创业者；先获Entrepreneur Work Visa(最长3年)，经营成功后可申请Entrepreneur Residence Visa。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "金额", value: "最低投资NZ$100,000(约$60K USD)", note: "须实际投入企业运营" },
      { dimension: "其他", value: "须提交详细商业计划并通过INZ评估", note: "商业计划须显示对NZ经济贡献" },
      { dimension: "语言等级", value: "IELTS 4.0整体", note: "或同等英语成绩" },
      { dimension: "年限", value: "创业工作签证最长3年", note: "2年后如企业成功可申请永居" },
    ],
    targetAudience: ["创业者", "商业购买者", "小企业经营者"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/visas/entrepreneur-work-visa",
    processingTime: "约6–12个月（含商业计划审核）",
    keyNotes: [
      "须投资至少NZ$100,000并实际运营企业",
      "商业计划需经INZ评估确认对新西兰有实质经济贡献",
      "创业成功运营2年后可申请Entrepreneur Residence Visa",
      "不可从事与商业计划无关的雇佣工作",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-investor",
    name: "投资移民Investor类别",
    englishName: "Investor Visa (Investor 1 / Investor 2)",
    summary:
      "面向高净值投资者的居留签证；Investor 2需投资NZ$3M以上4年，Investor 1(已关闭)原需NZ$10M。2022年改革后Active Investor Plus需NZ$5M–15M分级投资。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "金额", value: "Active Investor Plus最低NZ$5M（直接投资）；可接受NZ$15M混合投资", note: "2022新政分级：直接/混合/被动" },
      { dimension: "年限", value: "投资维持4年", note: "4年内须在NZ居住一定天数" },
      { dimension: "语言等级", value: "IELTS 5.0整体(Active Investor Plus)", note: "或同等英语成绩" },
      { dimension: "年龄", value: "无最高年龄限制", note: "" },
    ],
    targetAudience: ["高净值投资者", "有商业投资经验者", "希望通过投资获得NZ居留者"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/visas/active-investor-plus-visa",
    processingTime: "约6–12个月",
    keyNotes: [
      "2022年改革后旧Investor 1/2已关闭，新Active Investor Plus取代",
      "直接投资NZ$5M、混合投资NZ$15M、被动投资NZ$15M三档",
      "投资须在NZ指定可接受投资类别中",
      "4年内需在NZ居住至少117天（直接投资档）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nz-family",
    name: "家庭团聚",
    englishName: "Family Category (Partner/Parent)",
    summary:
      "新西兰公民/永居者的配偶伴侣可申请Partner of a New Zealander Residence Visa；父母可申请Parent Retirement Visa(需NZ$500K年收入+NZ$1M投资)。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "伴侣关系真实且持续12个月以上", note: "须提供共同生活证明" },
      { dimension: "金额", value: "父母类需年入NZ$500K+投资NZ$1M", note: "父母类门槛极高" },
      { dimension: "其他", value: "担保人须为NZ公民或永居者且有能力担保", note: "" },
    ],
    targetAudience: ["NZ公民/永居者的配偶伴侣", "NZ公民/永居者的父母", "与NZ居民有真实关系者"],
    officialLink: "https://www.immigration.govt.nz/new-zealand-visas/visas/partner-of-a-new-zealander-residence-visa",
    processingTime: "伴侣类约6–8个月；父母类约12–18个月",
    keyNotes: [
      "伴侣签证须证明关系真实且持续至少12个月",
      "父母团聚签证分为Parent Retirement(高门槛)和Parent Category(需子女收入担保，名额有限)",
      "伴侣签证期间可自由工作",
      "伴侣居住一定年限后可申请永居",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const newZealand: CountryData = {
  slug: "new-zealand",
  country: "新西兰",
  englishName: "New Zealand",
  region: "大洋洲",
  overview:
    "新西兰以SMC独立技术移民为核心通道，2023年改革后采用6分制简化评分；AEWV雇主认证体系规范雇主担保流程；银蕨签证为年轻人才提供求职窗口。创业与投资通道也较清晰。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["技术移民", "雇主担保", "留学转永居", "创业 / 投资路径", "长期居留转永居"],
  programs,
  bestFor: ["技能工作经验者(IT/医疗/工程)", "新西兰高校毕业生", "年轻(20-35)高技能求职者", "创业者", "高净值投资者"],
  residency:
    "SMC6分制达标可直申永居；创业Entrepreneur成功2年后永居；投资Active Investor Plus需NZ$5M+4年投资；伴侣居住一定年限后永居。",
  citizenship:
    "持永居后连续居住5年（其中每年在新NZ居住超240天）可申请入籍；需英语能力与品行要求。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["INZ (Immigration New Zealand)", "新西兰移民局官方网站"]),
};