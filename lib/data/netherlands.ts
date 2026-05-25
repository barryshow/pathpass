import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "nl-km",
    name: "高技能移民",
    englishName: "Kennismigrant (Highly Skilled Migrant)",
    summary:
      "面向受雇于荷兰认可雇主的高技能外国人才，无需额外工作许可；雇主须满足薪资门槛并已在IND注册为认可雇主。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "€3,909/月（30岁以下）或 €5,331/月（30岁以上）", note: "2024年IND公布门槛，每年1月更新" },
      { dimension: "学历", value: "学士及以上", note: "或同等专业经验可替代" },
      { dimension: "职业类别", value: "须受雇于IND认可雇主名单内的雇主", note: "雇主需先在IND完成认可注册" },
    ],
    targetAudience: ["IT工程师与软件开发者", "科研人员", "跨国公司调派员工", "金融与咨询行业专业人士"],
    officialLink: "https://ind.nl/en/work/highly-skilled-migrant",
    processingTime: "约2–4周（认可雇主快速通道）",
    keyNotes: [
      "雇主必须在IND注册为'认可雇主'( erkend referent )方可提交申请",
      "配偶/伴侣可随行并获得自由工作权（无需额外工作许可）",
      "连续合法居住5年后可申请长期居留或入籍",
      "2024年薪资门槛分别为30岁以下 €3,909、30岁以上 €5,331（不含8%假期津贴则另算）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-eubc",
    name: "欧盟蓝卡",
    englishName: "EU Blue Card (Netherlands)",
    summary:
      "面向高学历、高薪非欧盟公民的欧盟统一高端工作签证；荷兰执行版本需雇主合同且薪资达到蓝卡特定门槛。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "€6,245/月（2024年门槛）", note: "为荷兰法定最低月薪的1.5倍以上" },
      { dimension: "学历", value: "硕士及以上", note: "或五年渐进式相关专业经验" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
    ],
    targetAudience: ["高级研发工程师", "跨国公司高管", "医学与生命科学专业人士", "数据科学家"],
    officialLink: "https://ind.nl/en/work/eu-blue-card",
    processingTime: "约4–6周",
    keyNotes: [
      "蓝卡持有者更换雇主时前12个月内需新雇主仍符合蓝卡薪资要求",
      "蓝卡可携带至其他欧盟国家（需满足目的地国蓝卡条件后在该国重新申请）",
      "18个月后可申请家属随行；家属获自由工作权",
      "连续持蓝卡5年（其中在荷兰2年）可申请长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-study",
    name: "留学→求职年→工作",
    englishName: "Study → Search Year (Zoekjaar) → Work",
    summary:
      "在荷兰完成学士或硕士/博士后可申请一年求职年签证(zoekjaar hoogopgeleiden)，期间自由寻找工作或创业；找到符合门槛的工作后转为Kennismigrant或普通工作许可。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "荷兰高校学士/硕士/博士", note: "须在荷兰注册高校完成" },
      { dimension: "年限", value: "求职年签证有效期1年", note: "不可延长" },
      { dimension: "金额", value: "无最低薪资要求（求职年阶段）", note: "转KM时需满足KM薪资门槛" },
    ],
    targetAudience: ["荷兰高校毕业生", "希望在荷兰求职的国际学生", "STEM领域毕业生"],
    officialLink: "https://ind.nl/en/work/search-year-for-highly-educated-persons",
    processingTime: "约2–4周",
    keyNotes: [
      "求职年签证允许自由工作或自雇，不受雇主限制",
      "一年内须找到符合Kennismigrant薪资门槛的工作方可转为KM签证",
      "博士毕业生亦适用此路径",
      "求职年签证不可续签，需在此之前完成转换",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-startup",
    name: "Startup创业准证",
    englishName: "Startup Visa (Netherlands)",
    summary:
      "面向有创新商业计划的外国创业者，需由荷兰认可的facilitator（孵化器/加速器）担保；首年签证，后续可转为自雇签证。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "职业类别", value: "须与IND认可的facilitator签订协议", note: "facilitator名单由IND维护" },
      { dimension: "金额", value: "无最低投资额要求", note: "但facilitator需提供足够创业指导资源" },
      { dimension: "其他", value: "商业计划须具创新性(innovative)", note: "由facilitator评估认定" },
    ],
    targetAudience: ["初创企业家", "科技创业者", "有创新商业模式的创始人"],
    officialLink: "https://ind.nl/en/work/start-up",
    processingTime: "约4–8周",
    keyNotes: [
      "首年签证不可自雇营利，须在facilitator框架下推进创业",
      "一年后如创业达标可申请自雇签证(zelfstandige zonder arbeidswater)长期居留",
      "facilitator须为IND认可名单内的孵化器、加速器或其他创业支持机构",
      "该签证不要求最低投资额，但facilitator须证明能提供实质指导",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-self-employed-art",
    name: "自雇（艺术与文化）",
    englishName: "Self-employed (Art/Culture sector)",
    summary:
      "面向在艺术、文化或创意领域有特殊才能的自雇人士；需证明作品对荷兰文化经济有实质贡献，由IND与文化部门联合评估。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "职业类别", value: "艺术/文化/创意领域从业者", note: "须提交作品集与专业履历" },
      { dimension: "其他", value: "须证明对荷兰文化经济有不可替代贡献", note: "由IND与文化顾问委员会共同评估" },
      { dimension: "收入", value: "须能维持自身生活", note: "无固定门槛但需提供收入证明" },
    ],
    targetAudience: ["艺术家", "音乐家", "设计师", "文化创意从业者"],
    officialLink: "https://ind.nl/en/work/self-employed-person",
    processingTime: "约3–6个月",
    keyNotes: [
      "仅限艺术与文化领域，不适用于一般商业自雇",
      "申请须附带作品集、专业履历及文化顾问委员会推荐意见",
      "每两年需续签，续签时需证明持续从事艺术活动且有足够收入",
      "该类别名额有限，审批标准较高",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-long-res",
    name: "长期居留",
    englishName: "Long-term EC Residence (Langdurig Verblijf)",
    summary:
      "非欧盟公民在荷兰连续合法居住5年后可申请欧盟长期居留许可；享有与公民近乎等同的工作与居住权利。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年", note: "中断不超过6个月（或连续3年内累计不超过10个月）" },
      { dimension: "收入", value: "稳定且充足收入来源", note: "须达到法定最低工资标准" },
      { dimension: "语言等级", value: "NT2-II级或同等A2水平", note: "可通过公民融入考试(inburgering)证明" },
      { dimension: "其他", value: "无犯罪记录，全面医疗保险", note: "" },
    ],
    targetAudience: ["在荷兰长期合法居留者", "Kennismigrant持有人5年后", "家庭团聚签证持有者"],
    officialLink: "https://ind.nl/en/long-term-ec-residence",
    processingTime: "约3–6个月",
    keyNotes: [
      "5年居住期间须连续合法，短暂离境限制见上述条件",
      "须通过公民融入考试(inburgering)达到A2水平或取得NT2-II证书",
      "持有长期居留许可后可在其他欧盟国家以类似条件申请居留",
      "收入须持续稳定，不可依赖社会福利",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "nl-citizenship",
    name: "入籍",
    englishName: "Naturalisation (Nederlanderschap)",
    summary:
      "在荷兰连续合法居住5年（或3年若与荷兰公民结婚/同居）并满足融入条件后可申请荷兰国籍；需放弃原国籍（特定例外）。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年（婚姻/同居伴侣为3年）", note: "婚姻须真实且持续" },
      { dimension: "语言等级", value: "NT2-II / A2及以上", note: "公民融入考试(inburgering)" },
      { dimension: "其他", value: "无犯罪记录，充足收入，放弃原国籍（例外除外）", note: "部分国籍可保留双重国籍" },
    ],
    targetAudience: ["长期定居荷兰者", "与荷兰公民结婚/同居的外国人", "愿意放弃原国籍的移民"],
    officialLink: "https://ind.nl/en/naturalisation",
    processingTime: "约6–12个月",
    keyNotes: [
      "荷兰原则上要求放弃原国籍，但有例外（如对方国家不允许放弃）",
      "与荷兰公民结婚/长期同居者可缩短至3年",
      "65岁以上申请人融入考试要求降低",
      "入籍后即享有欧盟公民全部权利",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const netherlands: CountryData = {
  slug: "netherlands",
  country: "荷兰",
  englishName: "Netherlands",
  region: "西欧",
  overview:
    "荷兰以开放的经济和国际化人才政策著称，Kennismigrant高技能签证为IT、科研、金融等领域专业人士提供快速通道，创业准证支持创新创业者。IND（移民与归化局）审批效率较高，配偶可获自由工作权。5年后可申请长期居留或入籍。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["高技能人才签证", "留学转永居", "创业 / 投资路径", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["IT与科技人才", "初创创业者", "荷兰高校毕业生", "科研人员", "跨国公司调派员工"],
  residency:
    "连续合法居住5年、通过融入考试(A2)、稳定收入与全面医保后可申请欧盟长期居留许可，享有近乎等同公民的工作与居住权利。",
  citizenship:
    "5年连续合法居住（婚姻/同居3年）、通过融入考试、无犯罪记录、充足收入、原则上放弃原国籍后可申请入籍。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["IND (Immigratie- en Naturalisatiedienst)", "荷兰移民与归化局官方网站"]),
};