import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "se-work",
    name: "工作许可",
    englishName: "Work Permit (Arbetsgivare – Employee)",
    summary:
      "面向有瑞典雇主合同的非EU外国人的常规工作许可；雇主须在瑞典注册并提供符合行业惯例的薪资与保险。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "收入", value: "须达到瑞典行业惯例最低薪资标准(2024年门槛约SEK 13,000/月)", note: "须为瑞典该行业该岗位的合理薪资" },
      { dimension: "职业类别", value: "须有瑞典雇主正式合同", note: "雇主须在瑞典注册运营" },
      { dimension: "其他", value: "雇主须提供全面医疗保险与工伤保险", note: "申请期间也须覆盖" },
    ],
    targetAudience: ["有瑞典雇主offer的技能工作者", "IT与工程师", "医疗专业人员", "制造业技术人才"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Work-permits-for-employees.html",
    processingTime: "约2–4个月",
    keyNotes: [
      "雇主须提供符合瑞典行业惯例的薪资与保险(医疗保险+工伤保险+养老金)",
      "2022年改革后加强了对薪资与保险的审查",
      "工作许可有效期最长2年(与合同一致)，可续签",
      "连续持工作许可4年后可申请长期居留(PUT)",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "se-eubc",
    name: "欧盟蓝卡",
    englishName: "EU Blue Card (Sweden)",
    summary:
      "面向高学历高薪非EU公民的欧盟蓝卡(瑞典版)；薪资须达瑞典平均工资1.5倍，有雇主合同。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "须达瑞典平均工资1.5倍以上(约SEK 46,500/月，2024年)", note: "2024年瑞典平均工资约SEK 31,000/月" },
      { dimension: "学历", value: "硕士及以上", note: "或5年渐进式相关专业经验" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
    ],
    targetAudience: ["高学历高薪专业人才", "IT与工程领域人士", "跨国公司高管", "数据科学家"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/EU-Blue-Card.html",
    processingTime: "约2–4个月",
    keyNotes: [
      "蓝卡薪资门槛1.5倍瑞典平均工资(约SEK 46,500/月)",
      "蓝卡持有者更换雇主前12个月内需新雇主仍符合蓝卡薪资要求",
      "蓝卡可携带至其他欧盟国家转换",
      "蓝卡持有4年后可申请长期居留(PUT)",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "se-study",
    name: "留学→求职→工作",
    englishName: "Study → Job-seeking → Work",
    summary:
      "在瑞典完成学士/硕士/博士后可申请6个月求职签证寻找工作或创业；期间找到符合条件的工作后转为工作许可。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "瑞典高校学士/硕士/博士(至少30学分/1学期)", note: "须在瑞典高等教育完成至少一学期" },
      { dimension: "年限", value: "求职签证最长6个月", note: "不可续签" },
      { dimension: "金额", value: "留学期间学费+生活费约SEK 8,400/月", note: "须有足够资金证明" },
    ],
    targetAudience: ["瑞典高校毕业生", "希望在瑞典求职的留学生", "理工科毕业生"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden/After-completed-studies---looking-for-work.html",
    processingTime: "约2–4周",
    keyNotes: [
      "求职签证最长6个月，不可续签",
      "期间须有足够资金维持生活(SEK 8,400/月)",
      "找到符合工作许可条件的工作后须及时转换",
      "6个月内也可尝试创业但需转为自雇许可",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "se-selfemployed",
    name: "创业Self-employed",
    englishName: "Self-employment Permit (Sweden)",
    summary:
      "面向在瑞典自雇创业的外国人的工作许可；须提交商业计划并证明有足够资金与经验运营企业，对瑞典经济有贡献。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "其他", value: "须提交详细商业计划并获得瑞典移民局积极评估", note: "须证明对瑞典经济有贡献" },
      { dimension: "金额", value: "须有足够资金支撑创业与个人生活(建议至少SEK 200,000)", note: "无官方最低额但需合理" },
      { dimension: "年限", value: "须有相关领域2年以上自雇/创业经验", note: "" },
    ],
    targetAudience: ["在瑞典创业的企业家", "有创业经验的自雇人士", "小企业经营者"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Self-employment.html",
    processingTime: "约4–8个月",
    keyNotes: [
      "须提交详细商业计划并证明对瑞典经济有实质贡献",
      "须有至少2年相关自雇/创业经验",
      "须有充足资金支撑企业运营与个人生活",
      "自雇许可初始最长1年，可续签至2年，2年后如运营成功可申请长期居留(PUT)",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "se-put",
    name: "长期居留PUT",
    englishName: "Permanent Residence (PUT – Permanent Upphållstillstånd)",
    summary:
      "在瑞典连续合法居住4年(工作许可/蓝卡)或5年(自雇/家庭)后可申请永久居留许可(PUT)；享有与公民几乎等同的权利。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "4年(工作许可/蓝卡)或5年(自雇/家庭)", note: "连续合法居住" },
      { dimension: "收入", value: "须能维持自身与家属生活", note: "不可依赖社会救助" },
      { dimension: "其他", value: "无犯罪记录，品行良好", note: "" },
    ],
    targetAudience: ["工作许可持有4年者", "蓝卡持有4年者", "自雇许可持有5年者", "家庭团聚居留者"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Permanent-residence-permit.html",
    processingTime: "约3–6个月",
    keyNotes: [
      "工作许可与蓝卡持有者4年后可申请PUT",
      "自雇许可持有者5年后可申请PUT",
      "PUT永久有效，无需续签（仅更换卡片）",
      "PUT持有人可自由就业与居住，不受雇主绑定",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "se-citizenship",
    name: "入籍",
    englishName: "Naturalisation (Swedish Citizenship)",
    summary:
      "在瑞典连续合法居住5年(有PUT更好)并满足品行等条件后可申请瑞典国籍；承认双重国籍(2015年起)。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年", note: "与瑞典公民结婚/同居为3年" },
      { dimension: "其他", value: "品行良好(identity verification)，无犯罪记录，能维持生活", note: "" },
      { dimension: "年龄", value: "18岁以上", note: "" },
    ],
    targetAudience: ["在瑞典连续合法居住5年者", "PUT持有人", "与瑞典公民结婚/同居者"],
    officialLink: "https://www.migrationsverket.se/English/Private-individuals/Becoming-a-Swedish-citizen.html",
    processingTime: "约6–18个月",
    keyNotes: [
      "瑞典自2015年起承认双重国籍，入籍后无需放弃原国籍",
      "5年连续合法居住是常规要求",
      "与瑞典公民真实结婚/同居者可缩短至3年",
      "须通过身份核实(identity verification)与品行审查",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const sweden: CountryData = {
  slug: "sweden",
  country: "瑞典",
  englishName: "Sweden",
  region: "北欧",
  overview:
    "瑞典以工作许可为核心通道，雇主须提供行业惯例薪资与保险；2022年改革加强薪资审查。蓝卡薪资门槛1.5倍平均工资。4年工作许可后可申请PUT永久居留，5年可入籍(2015年起承认双重国籍)。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["雇主担保", "高技能人才签证", "留学转永居", "创业 / 投资路径", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["IT与软件工程师", "瑞典高校毕业生", "跨国公司调派员工", "创业企业家", "与瑞典公民结婚/同居者"],
  residency:
    "工作许可/蓝卡4年或自雇5年后可申请PUT永久居留；须能维持生活、无犯罪记录。",
  citizenship:
    "5年连续合法居住入籍(婚姻3年)；2015年起承认双重国籍。须品行良好与身份核实。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["Swedish Migration Agency (Migrationsverket)", "瑞典移民局官方网站"]),
};