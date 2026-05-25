import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "kr-e7",
    name: "E-7特定职业签证",
    englishName: "E-7 Specific Occupation Visa",
    summary:
      "面向在特定专业领域（如IT、工程、金融、法律、医疗等）具有资质的外国人的工作签证；需有韩国雇主担保并满足对应职业的资格条件。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "职业类别", value: "须为E-7许可职业列表内职业", note: "涵盖约86种特定职业类别" },
      { dimension: "学历", value: "学士及以上（多数类别）", note: "部分职业可用专业资质+经验替代" },
      { dimension: "年限", value: "相关领域工作经验2年以上", note: "部分职业要求更长" },
      { dimension: "收入", value: "须达到韩国最低工资标准以上", note: "具体视职业类别而定" },
    ],
    targetAudience: ["IT工程师", "金融分析师", "律师与法务人员", "医疗专业人员", "翻译与语言专家"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "约2–4周（雇主担保提交后）",
    keyNotes: [
      "E-7签证需韩国雇主先行取得雇佣外国人力许可(고용허가)后方可申请",
      "签证有效期通常1–3年，可续签",
      "更换雇主需重新申请或变更许可",
      "连续持E-7居住5年以上可申请F-5永居",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-e2",
    name: "E-2教学签证",
    englishName: "E-2 Foreign Language Instructor Visa",
    summary:
      "面向在韩国从事外语教学（主要为英语）的外国人的签证；需有学士学位及来自指定国家的国籍背景。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "学历", value: "学士及以上", note: "任何专业均可" },
      { dimension: "其他", value: "国籍须为英语指定国家（美国、加拿大、英国、爱尔兰、澳洲、新西兰、南非）", note: "韩国移民法限定国籍清单" },
      { dimension: "职业类别", value: "外语教学", note: "须有韩国教育机构雇主" },
      { dimension: "金额", value: "无最低投资额", note: "需雇主提供合同" },
    ],
    targetAudience: ["英语教师", "外籍语言讲师", "教育行业从业者"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "约2–4周",
    keyNotes: [
      "E-2签证须由韩国教育机构（学院/学校）作为雇主担保",
      "仅限指定国籍国家公民申请英语教学",
      "签证有效期1年，可续签",
      "须通过健康检查与无犯罪记录证明",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-study",
    name: "留学D-2→求职D-10→工作",
    englishName: "Study D-2 → Job-Seeking D-10 → Work",
    summary:
      "在韩国高校完成学位后可申请D-10求职签证，期间寻找工作；获得雇佣后转换为对应工作签证（如E-7）。D-2留学签证期间允许有限打工。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "韩国高校学士/硕士/博士（D-2签证）", note: "须为韩国教育部认可高校" },
      { dimension: "年限", value: "D-10求职签证最长6个月–1年", note: "硕士/博士可申请更长" },
      { dimension: "收入", value: "无最低收入要求（D-10阶段）", note: "转为工作签证时需满足对应签证收入门槛" },
    ],
    targetAudience: ["韩国高校毕业生", "希望在韩国就业的国际学生", "理工科与商科毕业生"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "D-10约2–4周",
    keyNotes: [
      "D-2留学签证期间可兼职打工（每周最多25小时，假期可全职）",
      "D-10求职签证允许求职与实习，不可正式就业",
      "找到符合条件的工作后须及时转换为E-7或其他工作签证",
      "韩国理工科(STEP)毕业生有更便利的求职与就业通道",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-points",
    name: "点数制优秀人才签证",
    englishName: "Points-based Outstanding Talent Visa",
    summary:
      "面向在年龄、学历、收入、韩语能力、专业经验等方面达到一定综合积分的外国人才；积分达标者可获得更便利的居留与永居通道。",
    category: "技术移民",
    minRequirements: [
      { dimension: "其他", value: "积分评估系统须达到80分以上（满分100）", note: "年龄/学历/收入/韩语/经验/加分项综合" },
      { dimension: "学历", value: "学士及以上（积分项之一）", note: "硕士/博士额外加分" },
      { dimension: "语言等级", value: "TOPIK 3级以上（积分项之一）", note: "4级以上额外加分" },
      { dimension: "年龄", value: "加分区间为18–40岁", note: "越年轻分值越高" },
    ],
    targetAudience: ["高学历专业人才", "韩语能力较强者", "在韩国有高收入工作机会者", "科研与工程领域人才"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "约3–6周",
    keyNotes: [
      "积分维度：年龄(0–15)、学历(0–20)、收入(0–20)、韩语(0–20)、专业经验(0–20)、加分项(0–5)",
      "达到80分可申请点数制F-2居留签证，3年后可申请F-5永居",
      "达到满分或特定高积分可缩短永居等待年限",
      "积分标准每年可能微调",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-d8",
    name: "创业D-8投资签证",
    englishName: "D-8 Investor / Startup Visa",
    summary:
      "面向在韩国投资设立企业或创业的外国人的签证；D-8-1为一般投资创业，D-8-2为外国投资企业，D-8-3为K-Startup特定创业。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "金额", value: "D-8-1最低投资₩100M(约$75K)；D-8-2外国投资最低₩50M(约$38K)", note: "2024年标准；D-8-3(K-Startup)无最低投资额" },
      { dimension: "职业类别", value: "须为法人代表或投资人", note: "须提交商业计划" },
      { dimension: "学历", value: "无硬性学历要求", note: "但D-8-3(K-Startup)倾向高学历创业者" },
    ],
    targetAudience: ["外国投资者", "在韩创业企业家", "K-Startup创业项目参与者"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "约4–8周",
    keyNotes: [
      "D-8-1需实际投资并运营企业，最低₩100M",
      "D-8-2面向已在韩国设立法人且外国投资达到₩50M以上的企业投资人",
      "D-8-3为K-Startup创业签证，需通过韩国创业振兴院(KISED)评估，无最低投资额要求",
      "D-8签证持有人连续居住5年后可申请F-5永居",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-f2f5",
    name: "F-2长期居留→F-5永居",
    englishName: "F-2 Long-term Residency → F-5 Permanent Residence",
    summary:
      "F-2为外国人长期居留签证，连续持F-2居住5年（部分情况可缩短）并满足收入、韩语等条件后可申请F-5永居。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "连续居住5年以上（申请F-5）", note: "点数制80分以上者可缩短至3年" },
      { dimension: "收入", value: "须达到韩国国民平均收入以上", note: "F-5申请时需收入稳定证明" },
      { dimension: "语言等级", value: "TOPIK 4级或韩语能力考试合格", note: "或完成韩国社会整合程序" },
      { dimension: "其他", value: "无犯罪记录，品行端正", note: "" },
    ],
    targetAudience: ["长期在韩居住的工作签证持有者", "点数制优秀人才", "投资创业者", "与韩国人结婚者"],
    officialLink: "https://www.visa.go.kr/en/main.do",
    processingTime: "F-5申请约6–12个月",
    keyNotes: [
      "F-2签证种类多样（结婚、点数制、留学后就业等），均可作为通往F-5的路径",
      "与韩国公民结婚者2年后可申请F-5（需维持婚姻真实）",
      "F-5永居后可自由就业与居住，不再受雇主绑定",
      "F-5持有者可进一步申请入籍",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "kr-citizenship",
    name: "入籍",
    englishName: "Naturalisation (Korean Citizenship)",
    summary:
      "连续居住5年以上、有稳定收入、通过韩语考试、品行端正可申请韩国国籍；与韩国人结婚者可缩短为2年。韩国原则上不承认双重国籍。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "连续居住5年以上（婚姻为2年以上）", note: "婚姻需真实持续" },
      { dimension: "收入", value: "达到韩国国民平均收入以上", note: "" },
      { dimension: "语言等级", value: "TOPIK 4级或韩语能力认证", note: "或完成社会整合课程" },
      { dimension: "其他", value: "无犯罪记录，品行端正，须放弃原国籍", note: "极少数例外可保留双重国籍" },
    ],
    targetAudience: ["长期定居韩国者", "与韩国人结婚的外国人", "F-5永居持有者"],
    officialLink: "https://www.moj.go.kr/en/",
    processingTime: "约6–12个月",
    keyNotes: [
      "韩国原则上不承认双重国籍，入籍须放弃原国籍",
      "杰出人才（对韩国有特殊贡献者）可简化入籍程序",
      "65岁以上申请人的韩语要求可降低",
      "入籍后享有韩国公民全部权利",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const southKorea: CountryData = {
  slug: "south-korea",
  country: "韩国",
  englishName: "South Korea",
  region: "东亚",
  overview:
    "韩国通过E系列工作签证、点数制优秀人才签证、D-8投资创业签证等路径吸引外国人才。K-Startup创业签证无最低投资额，点数制80分以上者可缩短永居等待时间。韩语能力(TOPIK)是多项申请的重要评估因素。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["雇主担保", "留学转永居", "技术移民", "创业 / 投资路径", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["韩语能力较强的专业人士", "在韩高校毕业生", "IT与科技人才", "创业企业家", "与韩国人结婚者"],
  residency:
    "连续合法居住5年以上（点数制80分可缩短至3年、婚姻2年），收入达到国民平均水平，韩语TOPIK 4级，无犯罪记录后可申请F-5永居。",
  citizenship:
    "5年连续居住（婚姻2年）、稳定收入、韩语4级、无犯罪记录、放弃原国籍后可申请入籍。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["Korea Immigration Service (출입국관리사무소)", "韩国法务部(MOJ)", "韩国海外移民振兴院(KISED)"]),
};