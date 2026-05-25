import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "ch-lpermit",
    name: "L短期工作许可",
    englishName: "L Permit (Short-term Work Permit)",
    summary:
      "面向在瑞士短期(最长1年)工作的非EU/EFTA公民的临时许可；不可续签超1年，期满后须离境6个月方可再次申请。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "年限", value: "最长1年，不可续签超1年", note: "期满后须离境6个月" },
      { dimension: "职业类别", value: "须有瑞士雇主合同", note: "雇主须证明无法在瑞士/EU/EFTA招到人选" },
      { dimension: "收入", value: "须达到瑞士行业惯例薪资标准", note: "瑞士薪资门槛视行业与地区而定" },
    ],
    targetAudience: ["短期项目工作者", "季节性工作者", "临时派遣专业人士"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/arbeit.html",
    processingTime: "约2–4周",
    keyNotes: [
      "L许可最长1年，不可续签超此期限",
      "期满后须离境6个月方可再次申请L许可",
      "非EU/EFTA公民受双重配额限制(联邦+州)",
      "L许可期间家属随行受限",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ch-bpermit",
    name: "B长期工作许可",
    englishName: "B Permit (Long-term Residence/Work Permit)",
    summary:
      "面向在瑞士长期(1年+可续签)工作的非EU/EFTA公民；每年配额有限(联邦约4,500+州2,500)，须雇主优先招聘瑞士/EU/EFTA公民。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "年限", value: "1年，可逐年续签", note: "5年后可申请C许可(长期居留)" },
      { dimension: "职业类别", value: "须有瑞士雇主合同且通过优先招聘审查", note: "雇主须证明无法在瑞士/EU/EFTA找到合适人选" },
      { dimension: "收入", value: "须达到瑞士行业与地区惯例薪资", note: "瑞士薪资标准视行业/地区/职位而定" },
      { dimension: "其他", value: "受联邦与州双重配额限制", note: "每年总配额约4,500(联邦)+2,500(州)" },
    ],
    targetAudience: ["长期在瑞士工作的专业人士", "IT与金融行业人才", "跨国公司调派员工", "科研人员"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/arbeit.html",
    processingTime: "约2–6个月（含配额审批）",
    keyNotes: [
      "B许可每年可续签，10年后(美国/加拿大公民5年后)可申请C许可",
      "非EU/EFTA受严格配额限制，年度约4,500+2,500名额",
      "雇主须遵守优先招聘原则(瑞士公民→EU/EFTA→第三方国家)",
      "B许可期间配偶可在一定条件下申请随行工作许可",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ch-eubc",
    name: "欧盟蓝卡(非EU配额受限)",
    englishName: "EU Blue Card (Switzerland)",
    summary:
      "瑞士版本的欧盟蓝卡，面向高学历高薪非EU/EFTA公民；受配额限制，薪资门槛高于瑞士平均。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "须达瑞士同行业同地区平均薪资的1.5倍以上", note: "部分紧缺职业可降至1.0倍" },
      { dimension: "学历", value: "硕士及以上", note: "或5年渐进式相关专业经验" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
      { dimension: "其他", value: "受年度配额限制(纳入B许可配额)", note: "" },
    ],
    targetAudience: ["高学历高薪专业人才", "IT与工程领域人士", "金融行业专业人士", "跨国公司高管"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/arbeit/eu-blue-card.html",
    processingTime: "约2–6个月",
    keyNotes: [
      "瑞士蓝卡纳入B许可配额体系，名额有限",
      "薪资门槛为瑞士行业地区平均薪资1.5倍（紧缺可降至1.0倍）",
      "蓝卡持有2年后可较便利地申请C许可（长期居留）",
      "蓝卡可在其他欧盟国家携带转换",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ch-selfemployed",
    name: "创业/自雇许可",
    englishName: "Self-employment Permit (Switzerland)",
    summary:
      "面向在瑞士创业或自雇的非EU/EFTA公民；须证明创业对瑞士经济有实质贡献，审批极严格且受配额限制。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "其他", value: "须证明创业对瑞士经济有持续实质贡献", note: "创造就业、技术转移、区域经济促进等" },
      { dimension: "金额", value: "无官方最低投资额但须有充足创业资金", note: "实际门槛视州而定，通常需显著投资" },
      { dimension: "职业类别", value: "须为创业者/自雇人士", note: "须提交详细商业计划" },
    ],
    targetAudience: ["在瑞士创业的企业家", "有瑞士州级支持的自雇专业人士"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/selbstaendige.html",
    processingTime: "约3–6个月（州级审核+联邦审批）",
    keyNotes: [
      "创业许可审批极其严格，须证明对瑞士经济的实质贡献",
      "各州有自己的审核标准，部分州对创业更友好",
      "创业初期获L许可(1年)，成功运营后可转为B许可",
      "非EU/EFTA创业者受配额限制",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ch-cpermit",
    name: "C许可(长期居留)",
    englishName: "C Permit (Permanent Residence/Settlement Permit)",
    summary:
      "非EU/EFTA公民在瑞士合法居住10年后（美国/加拿大公民5年）可申请C永久居留许可；享有与瑞士公民几乎等同的权利。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "10年连续合法居住（美国/加拿大公民5年）", note: "须在瑞士连续居住，中断需<6个月" },
      { dimension: "语言等级", value: "须达到所在州官方语言A2水平（口语）+A1（书面）", note: "2024年起语言要求提升至B1口语+A2书面将逐步实施" },
      { dimension: "其他", value: "融入瑞士社会，无犯罪记录，经济独立", note: "" },
    ],
    targetAudience: ["在瑞士长期合法居住者", "B许可持有10年以上者", "美国/加拿大公民(5年快速通道)"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/niederlassungsbewilligung.html",
    processingTime: "约3–6个月",
    keyNotes: [
      "C许可为永久居留，5年一续签行政手续",
      "10年居住要求适用于多数非EU/EFTA公民；美国/加拿大公民仅需5年",
      "语言要求需达到所在州官方语言(德/法/意/罗曼什)的指定等级",
      "C许可持有人可自由就业、自雇与居住，不受雇主绑定",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "ch-citizenship",
    name: "入籍(州+联邦双重程序)",
    englishName: "Naturalisation (Swiss Citizenship)",
    summary:
      "瑞士入籍需先通过州级与市镇级审批，再通过联邦审批；须在瑞士居住10年以上(持C许可)，且满足所在州/市镇额外要求。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "12年总居住（改革后2024年起为10年）", note: "须持C许可，州级可能要求更长" },
      { dimension: "语言等级", value: "所在州官方语言B1(口语)+A2(书面)", note: "2024年改革后语言要求提升" },
      { dimension: "其他", value: "融入瑞士社会、无犯罪记录、经济独立、通过州与市镇审批", note: "各州/市镇有额外要求" },
    ],
    targetAudience: ["在瑞士居住10年以上且持C许可者", "深度融入瑞士社会者"],
    officialLink: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt_einreise/einbuergerung.html",
    processingTime: "约1–3年（州+市镇+联邦三重审批）",
    keyNotes: [
      "瑞士入籍需三重审批：市镇→州→联邦，流程复杂且时间较长",
      "各州与市镇有自己的入籍要求，部分州要求更长的居住年限或额外融入条件",
      "2024年改革后将联邦要求从12年降至10年，语言要求提升至B1口语+A2书面",
      "瑞士原则上不承认双重国籍，但部分原国籍国不允许放弃时可例外保留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const switzerland: CountryData = {
  slug: "switzerland",
  country: "瑞士",
  englishName: "Switzerland",
  region: "西欧",
  overview:
    "瑞士对非EU/EFTA公民实行严格配额与优先招聘制度，年度配额约4,500(联邦)+2,500(州)。B许可为长期工作许可，10年后可申请C永久居留；创业许可审批极严格。入籍需州+联邦双重程序。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["雇主担保", "高技能人才签证", "创业 / 投资路径", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["高薪专业人才(IT/金融/制药)", "跨国公司调派员工", "美国/加拿大公民(5年C许可优势)", "科研人员", "有瑞士雇主offer者"],
  residency:
    "B许可1年+可续签，10年后(美/加5年)可申请C永久居留许可；C许可5年一续签行政手续，享自由工作权利。",
  citizenship:
    "10年居住(持C许可)+B1口语+A2书面所在州官方语言+通过市镇/州/联邦三重审批；各州有额外要求。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["SEM (State Secretariat for Migration)", "瑞士联邦移民秘书处官网"]),
};