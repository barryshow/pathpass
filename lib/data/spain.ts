import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "es-work",
    name: "工作许可(配额制)",
    englishName: "Work Permit (Cuenta Ajena)",
    summary:
      "面向有西班牙雇主合同的非EU外国人的常规工作许可；受年度配额限制，雇主须优先招聘西班牙/EU公民。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "职业类别", value: "须有西班牙雇主正式合同", note: "雇主须在国家就业服务(SEPE)登记岗位30天" },
      { dimension: "收入", value: "须达到西班牙行业最低薪资标准(SMI)", note: "2024年SMI约€1,184/月(14次/年)" },
      { dimension: "其他", value: "受年度配额限制", note: "配额由政府每年确定" },
    ],
    targetAudience: ["有西班牙雇主offer的工作者", "中等技能专业人士", "服务业与制造业从业者"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/trabajo_cuenta_ajena",
    processingTime: "约2–4个月（含配额与劳动局审批）",
    keyNotes: [
      "雇主须先在SEPE登记岗位30天证明无法在西班牙/EU招到合适人选",
      "非EU外国人受年度配额限制，名额有限",
      "工作许可有效期与合同期限一致",
      "连续合法居住5年后可申请长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-dnv",
    name: "数字游民签证",
    englishName: "Digital Nomad Visa (Spain)",
    summary:
      "2023年推出的面向远程工作者与数字游民的签证；允许在西班牙居住并远程为外国公司/客户工作，也可部分为西班牙公司工作(≤20%)。",
    category: "数字游民签证",
    minRequirements: [
      { dimension: "收入", value: "月收入须达西班牙SMI的2倍(约€2,368/月)或年薪€27,720", note: "2024年SMI约€1,184/月" },
      { dimension: "其他", value: "须为远程工作者/自雇数字游民", note: "可为外国公司远程工作或自雇" },
      { dimension: "学历", value: "无硬性学历要求但需专业资质或远程工作经验证明", note: "" },
    ],
    targetAudience: ["远程工作者", "自由职业数字游民", "IT与设计领域远程从业者", "为外国公司远程工作的人"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/visado_nomada_digital",
    processingTime: "约2–4周",
    keyNotes: [
      "2023年新推出的签证类别，西班牙为首个推出数字游民签证的主要欧盟国家之一",
      "允许为外国公司/客户远程工作，也可为西班牙公司工作但不超过20%收入",
      "月收入须达2倍SMI(约€2,368)或可证明有足够远程收入",
      "签证最长1年(境外申请)或3年(境内申请)，可续签至最长5年",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-nlv",
    name: "非盈利居留NLV",
    englishName: "Non-Lucrative Visa (Visado de residencia no lucrativa)",
    summary:
      "面向有足够被动收入/资产但不在西班牙工作的外国人的居留签证；不允许在西班牙从事任何营利性工作。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "收入", value: "月收入须达IPREM 4倍(约€2,400/月)或年€28,800；每多一位家庭成员加IPREM 1倍", note: "2024年IPREM约€600/月" },
      { dimension: "其他", value: "须有全面医疗保险、无犯罪记录", note: "不可在西班牙从事任何营利活动" },
      { dimension: "金额", value: "须有足够存款/资产证明", note: "" },
    ],
    targetAudience: ["退休人士", "有被动收入的远程财务独立者", "不在西班牙工作但希望居住者"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/residencia_no_lucrativa",
    processingTime: "约1–3个月",
    keyNotes: [
      "NLV不允许在西班牙从事任何营利性工作（包括自雇）",
      "收入来源可为养老金、投资收益、租金等被动收入",
      "1年后可续签2年，再续签2年，5年后可申请长期居留",
      "收入门槛基于IPREM指标，每年调整",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-autonomo",
    name: "自雇Autónomo",
    englishName: "Self-employed Work Permit (Cuenta Propia / Autónomo)",
    summary:
      "面向在西班牙自雇创业的外国人的工作许可；须提交商业计划并证明创业对西班牙经济有贡献，需缴纳自雇社保(cuota de autónomos)。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "其他", value: "须提交详细商业计划并证明对西班牙经济有贡献", note: "创造就业或促进区域经济" },
      { dimension: "收入", value: "须有足够资金支持创业初期运营与个人生活", note: "无固定金额但需合理" },
      { dimension: "金额", value: "自雇社保月缴约€300+（新创业者可享tarifa plana约€80/月首年）", note: "cuota de autónomos" },
    ],
    targetAudience: ["在西班牙创业的自雇人士", "自由职业者", "小企业经营者"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/trabajo_cuenta_propia",
    processingTime: "约2–4个月",
    keyNotes: [
      "须提交商业计划并获得积极评估(报告 favorable)",
      "须注册为autónomo(自雇)并缴纳月度社保",
      "新创业者首年可享tarifa plana减免社保(约€80/月)",
      "1年后可续签，5年后可申请长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-study",
    name: "留学→求职→工作",
    englishName: "Study → Job Search → Work",
    summary:
      "在西班牙完成学士/硕士/博士后可申请求职签证(busqueda de empleo)最长12个月；期间找到工作后转为对应工作许可。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "西班牙高校学士/硕士/博士", note: "须在西班牙教育部认可高校完成" },
      { dimension: "年限", value: "求职签证最长12个月", note: "不可续签" },
      { dimension: "金额", value: "留学期间学费+生活费约€8,000+/年", note: "" },
    ],
    targetAudience: ["西班牙高校毕业生", "希望在西班牙就业的留学生", "商科与旅游管理毕业生"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/visado_busqueda_empleo",
    processingTime: "约2–4周",
    keyNotes: [
      "求职签证仅限硕士及以上毕业生（学士毕业生2023年改革后也可申请）",
      "求职签证最长12个月，不可续签",
      "期间找到符合条件的工作后须及时转为工作许可",
      "留学期间(D签证)允许有限打工(每周30小时)",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-long-res",
    name: "长期居留5年",
    englishName: "Long-term Residence (Residencia de larga duración)",
    summary:
      "在西班牙连续合法居住5年后可申请长期居留许可；享有自由工作与居住权利，不再受配额限制。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年", note: "中断不超过6个月或累计不超过10个月(5年内)" },
      { dimension: "其他", value: "无犯罪记录，融入社会，稳定收入", note: "" },
      { dimension: "收入", value: "须有稳定收入来源", note: "" },
    ],
    targetAudience: ["在西班牙连续合法居住5年者", "工作许可/自雇许可长期持有者", "NLV居住5年者"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/residencia_larga_duracion",
    processingTime: "约3–6个月",
    keyNotes: [
      "5年居住须连续合法，短暂离境有严格限制",
      "长期居留许可无限期有效(5年一续签行政手续)",
      "持长期居留可自由就业与居住，不受配额限制",
      "长期居留是入籍的前提条件之一",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "es-citizenship",
    name: "入籍10年/2年(拉美)",
    englishName: "Naturalisation (Spanish Citizenship)",
    summary:
      "常规入籍需10年连续居住；拉美/菲律宾/赤道几内亚/葡萄牙公民仅需2年；与西班牙公民结婚1年。承认双重国籍（与拉美国家有双边协议）。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "10年(常规)/2年(拉美/菲律宾/葡国)/1年(婚姻)", note: "拉美优势是西班牙独特政策" },
      { dimension: "语言等级", value: "DELE A2 + CCSE宪法文化考试", note: "2024年起语言要求从A2维持" },
      { dimension: "其他", value: "融入西班牙社会、品行良好、无犯罪记录", note: "" },
    ],
    targetAudience: ["长期定居西班牙者", "拉美/菲律宾/葡萄牙公民(2年快速通道)", "与西班牙公民结婚者"],
    officialLink: "https://www.inclusion.gob.es/web/exterior/extranjeria/nacionalidad",
    processingTime: "约1–3年",
    keyNotes: [
      "拉美/菲律宾/赤道几内亚/葡萄牙公民仅需2年居住即可申请入籍，这是西班牙独特政策",
      "与西班牙公民真实结婚1年+合法居住1年可申请",
      "需通过DELE A2西班牙语考试与CCSE宪法社会文化考试",
      "与拉美国家有双边协议，保留原国籍不受限",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const spain: CountryData = {
  slug: "spain",
  country: "西班牙",
  englishName: "Spain",
  region: "西欧",
  overview:
    "西班牙2023年推出数字游民签证成为欧盟先驱；NLV非盈利居留适合退休人士；拉美公民2年入籍是独特优势。工作许可受配额限制，自雇Autónomo需缴纳社保。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["雇主担保", "数字游民签证", "创业 / 投资路径", "留学转永居", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["拉美公民(2年入籍优势)", "数字游民与远程工作者", "退休与被动收入人士", "西班牙高校毕业生", "自雇创业者"],
  residency:
    "连续合法居住5年可申请长期居留(residencia de larga duración)；NLV/自雇/工作许可均可累计。",
  citizenship:
    "常规10年；拉美/菲律宾/葡萄牙公民2年；与西班牙公民结婚1年；DELE A2+CCSE考试。承认双重国籍(与拉美有双边协议)。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["Ministerio de Inclusión, Seguridad Social y Migraciones", "西班牙内政部移民门户", "SEPE (Servicio Público de Empleo Estatal)"]),
};