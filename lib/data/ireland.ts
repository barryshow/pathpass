import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "ie-csk",
    name: "关键技能就业许可",
    englishName: "Critical Skills Employment Permit (CSEP)",
    summary:
      "面向爱尔兰紧缺职业列表上的高技能外国人的就业许可；持有者2年后可申请Stamp 4长期居留，配偶可立即工作。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "€64,000/年以上（多数职业）", note: "特定紧缺职业可低于此门槛至€32,000" },
      { dimension: "职业类别", value: "须为Critical Skills职业列表内职业", note: "DETE定期更新紧缺职业清单" },
      { dimension: "学历", value: "学士及以上", note: "或相关领域高级专业资质" },
      { dimension: "年限", value: "雇主合同至少2年", note: "" },
    ],
    targetAudience: ["IT与软件工程师", "医疗专业人员(医生/护士)", "金融与数据分析人才", "工程师"],
    officialLink: "https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Critical-Skills-Employment-Permit/",
    processingTime: "约4–8周",
    keyNotes: [
      "CSEP持有2年后可自动申请Stamp 4长期居留（无需雇主担保）",
      "配偶/伴侣可获得Stamp 1G配偶许可，立即自由工作",
      "€64,000门槛适用于多数职业；特定紧缺职业如ICT可降至€32,000",
      "雇主须在爱尔兰注册并至少50%员工为EEA公民（初创企业例外）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ie-study1g",
    name: "留学毕业Stamp 1G",
    englishName: "Post-Study Work – Stamp 1G",
    summary:
      "在爱尔兰完成Level 8(学士)及以上学历的非EEA毕业生可申请Stamp 1G求职与工作许可；Level 8获1年，Level 9–10(硕士/博士)获2年。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "爱尔兰Level 8(学士)/9(硕士)/10(博士)学历", note: "须为爱尔兰认可高校完成" },
      { dimension: "年限", value: "Level 8: 1年; Level 9–10: 2年", note: "Stamp 1G不可续签" },
      { dimension: "金额", value: "留学学费+生活费约€10,000/年以上", note: "签证申请需资金证明" },
    ],
    targetAudience: ["爱尔兰高校毕业生", "希望在爱尔兰就业的留学生", "STEM与金融领域毕业生"],
    officialLink: "https://www.irishimmigration.ie/coming-to-live-in-ireland/study-in-ireland/post-study-work/",
    processingTime: "约4–6周",
    keyNotes: [
      "Stamp 1G期间可自由工作不受雇主限制，无需就业许可",
      "Level 8(学士)获1年，Level 9–10(硕士/博士)获2年",
      "Stamp 1G不可续签，需在到期前转为其他许可类型",
      "找到符合CSEP或一般就业许可的工作后可转换",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ie-general",
    name: "一般就业许可",
    englishName: "General Employment Permit (GEP)",
    summary:
      "面向非紧缺职业但有雇主offer的外国人的就业许可；需满足最低薪资门槛且职业不在排除列表中。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "收入", value: "€34,000/年以上（多数职业）", note: "部分职业可降至€30,000（如餐饮业厨师等）" },
      { dimension: "职业类别", value: "不在Ineligible Occupation List上的职业", note: "DETE维护排除职业清单" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
      { dimension: "其他", value: "雇主须50%以上EEA员工（部分豁免）", note: "" },
    ],
    targetAudience: ["有爱尔兰雇主offer的非紧缺职业从业者", "中等薪资专业人士", "餐饮与服务业专业人士"],
    officialLink: "https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/General-Employment-Permit/",
    processingTime: "约4–8周",
    keyNotes: [
      "薪资须达到€34,000门槛（特定职业降至€30,000）",
      "职业不可在Ineligible Occupation List上",
      "雇主须至少50%员工为EEA公民（初创企业可豁免）",
      "GEP持9个月后配偶可申请Stamp 1G配偶许可工作",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ie-researcher",
    name: "研究员Stamp 1A",
    englishName: "Researcher Stamp 1A",
    summary:
      "面向在爱尔兰认可研究机构从事研究工作的外国研究人员；Stamp 1A允许从事指定研究职位。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "职业类别", value: "须为爱尔兰认可研究机构的研究岗位", note: "认可机构名单由DETE维护" },
      { dimension: "学历", value: "硕士及以上", note: "或等效研究资质" },
      { dimension: "收入", value: "研究机构须提供合理薪资", note: "无固定最低门槛但须合理" },
    ],
    targetAudience: ["研究人员", "博士后", "高校科研人员", "实验室研究员"],
    officialLink: "https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Researcher-Employment-Permit/",
    processingTime: "约4–6周",
    keyNotes: [
      "Stamp 1A仅限在指定研究机构从事研究工作",
      "不可从事非研究性质的雇佣工作",
      "研究机构需在DETE认可名单内",
      "5年后可申请Stamp 4长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ie-stamp4",
    name: "长期居留Stamp 4",
    englishName: "Long-term Residence – Stamp 4",
    summary:
      "在爱尔兰合法居住5年（CSEP持有者2年后也可申请）可获得Stamp 4长期居留许可；享有自由工作与居住权利，无需就业许可。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "合法居住5年以上（CSEP持有人2年即可）", note: "CSEP是快速通道" },
      { dimension: "其他", value: "无犯罪记录，持续合法居留", note: "" },
      { dimension: "收入", value: "无须额外收入门槛（已通过就业许可验证）", note: "" },
    ],
    targetAudience: ["CSEP持有2年者", "长期合法居住5年者", "爱尔兰稳定就业者"],
    officialLink: "https://www.irishimmigration.ie/coming-to-live-in-ireland/long-term-residence/",
    processingTime: "约6–12个月",
    keyNotes: [
      "Stamp 4持有人无需就业许可即可自由在爱尔兰工作",
      "CSEP持有者2年后可申请Stamp 4是快速通道",
      "其他许可类型需5年合法居住后方可申请",
      "Stamp 4有效期通常5年，可续签",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ie-citizenship",
    name: "入籍（5年居住）",
    englishName: "Naturalisation (Irish Citizenship)",
    summary:
      "在爱尔兰连续居住5年（最后1年须连续居住）并满足品行等条件后可申请爱尔兰国籍；承认双重国籍。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "累计居住5年（最后1年须连续在爱尔兰）", note: "Stamp 4或其他合法居留均可累计" },
      { dimension: "年龄", value: "18岁以上（未成年人需父母申请）", note: "" },
      { dimension: "其他", value: "无犯罪记录，品行良好，意图继续居住爱尔兰", note: "" },
    ],
    targetAudience: ["长期定居爱尔兰者", "Stamp 4持有者", "与爱尔兰公民结婚者"],
    officialLink: "https://www.irishimmigration.ie/coming-to-live-in-ireland/citizenship/",
    processingTime: "约12–24个月",
    keyNotes: [
      "爱尔兰承认双重国籍，入籍后无需放弃原国籍",
      "5年居住中最后1年须连续在爱尔兰居住",
      "与爱尔兰公民结婚/同居者居住3年后可申请",
      "入籍申请需提供3位担保人(2位爱尔兰公民+1位专业人士)",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const ireland: CountryData = {
  slug: "ireland",
  country: "爱尔兰",
  englishName: "Ireland",
  region: "西欧",
  overview:
    "爱尔兰以Critical Skills Employment Permit为高端人才快速通道，2年后可获Stamp 4长期居留；Stamp 1G为毕业生提供1–2年自由求职期；英语国家且承认双重国籍。DETE与INIS为许可核验来源。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["高技能人才签证", "留学转永居", "雇主担保", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["IT与软件工程师", "医疗专业人员", "爱尔兰高校毕业生", "跨国公司员工", "英语母语专业人士"],
  residency:
    "CSEP持有2年可申请Stamp 4长期居留(自由工作)；其他许可类型需5年合法居住后申请Stamp 4。",
  citizenship:
    "累计居住5年（最后1年连续居住）、品行良好、意图继续居住可申请入籍；承认双重国籍。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["DETE (Department of Enterprise, Trade and Employment)", "INIS (Irish Naturalisation and Immigration Service)", "Irish Immigration官网"]),
};