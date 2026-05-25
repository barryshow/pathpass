import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

// ========== Japan Immigration Programs ==========

const jpHspv: ImmigrationProgram = {
  id: "jp-hspv",
  name: "高度人才签证",
  englishName: "Highly Skilled Professional Visa (HSPV)",
  summary:
    "积分制签证，按学历、收入、年龄、研究业绩等打分，达到70分可3年申请永住，80分可1年申请永住。分为高度专门职1号（学术研究/专门技术/经营管理三个领域）和2号（1号持有者满一定条件后可无限期延长）。",
  category: "高技能人才签证",
  minRequirements: [
    { dimension: "金额", value: "年收入≥300万日元", note: "积分表中收入越高分越多，1,000万日元以上可得50分" },
    { dimension: "年限", value: "1～3年", note: "80分→1年可申永住；70分→3年可申永住；普通永住需10年" },
    { dimension: "语言等级", value: "JLPT N1加10分 / N2加5分", note: "日语能力测试成绩可在积分表中加分" },
    { dimension: "学历", value: "博士30分 / 硕士20分 / 本科10分", note: "STEM领域博士/硕士额外加5分" },
    { dimension: "年龄", value: "≤39岁加15分 / 40～44岁加10分", note: "年龄分随年龄增长递减" },
    { dimension: "其他", value: "积分合计≥70分（1号）", note: "积分表涵盖学历、收入、年龄、日语、学历加成、研究业绩等维度" },
  ],
  targetAudience: ["高学历技术人才", "研究人员", "高级管理层", "IT/STEM领域专业人士", "高收入外国人才"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约1～3个月",
  keyNotes: [
    "积分表每年可能微调，需以出入国在留管理厅最新版本为准",
    "2号签证无活动范围限制，但需先取得1号并满足一定居住条件",
    "永住加速：80分1年、70分3年，大幅缩短普通10年等待期",
    "配偶就业无限制，可带父母/家政人员（高收入条件下）",
    "经营管理领域需有实际经营实体并满足资本金要求",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpBusinessManager: ImmigrationProgram = {
  id: "jp-business-manager",
  name: "经营管理签证",
  englishName: "Business Manager Visa (Keiei Kanri)",
  summary:
    "面向在日本设立并经营/管理企业的外国人。需有真实经营实体、资本金≥500万日元，且事业计划可行。是外国人在日本创业/经营公司的主要签证路径。",
  category: "创业 / 投资路径",
  minRequirements: [
    { dimension: "金额", value: "资本金≥500万日元", note: "约3.3万美元；需实际注入并用于经营" },
    { dimension: "其他", value: "有实际经营场所", note: "需租赁办公室或店铺，虚拟地址不被认可" },
    { dimension: "其他", value: "事业计划书可行且具体", note: "需提交详细的经营计划，审查官会评估可行性" },
    { dimension: "年限", value: "初始1年或6个月", note: "续签后可获3年或5年签证" },
  ],
  targetAudience: ["创业者", "中小企业经营者", "外国企业驻日代表", "餐饮/零售业经营者", "咨询公司经营者"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约3～6个月",
  keyNotes: [
    "资本金500万日元是硬性底线，但事业规模越大审查越容易通过",
    "需至少雇佣2名日本国民或永住者，或资本金达到一定规模可替代雇佣要求",
    "初期通常给予1年签证，持续经营可续签3年/5年",
    "亏损经营可能导致续签困难，审查官会关注事业持续性",
    "可转为高度人才经营管理类（积分达标时）",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpEngineer: ImmigrationProgram = {
  id: "jp-engineer-humanities",
  name: "技术·人文知识·国际业务签证",
  englishName: "Engineer/Specialist in Humanities/International Services Visa",
  summary:
    "日本最常见的工作签证类别，涵盖IT工程师、设计师、翻译、市场营销、会计等专业岗位。需有日本雇主聘用，且岗位内容与学历/经验匹配。2024年改版后分为1号（常规）和2号（更高技能）。",
  category: "技术移民",
  minRequirements: [
    { dimension: "学历", value: "本科及以上（相关专业）", note: "无相关学历时需10年以上相关工作经验替代" },
    { dimension: "收入", value: "不低于同岗位日本国民水平", note: "审查官会比对日本同行业同岗位薪资标准" },
    { dimension: "职业类别", value: "技术/人文/国际业务", note: "IT、设计、翻译、营销、会计、法律等均在此范围内" },
    { dimension: "年限", value: "初始1年或3年或5年", note: "根据合同期限和审查结果决定" },
  ],
  targetAudience: ["IT工程师", "设计师", "翻译/语言工作者", "国际业务从业者", "会计/财务专业人士"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约1～3个月",
  keyNotes: [
    "2024年签证类别改版，原有「技术·人文知识·国际业务」细化为多个子类别",
    "必须有日本雇主提供的聘用合同，不能自雇",
    "薪资必须达到行业同等水平，过低薪资会被拒",
    "1号签证要求相对基础；2号签证要求更高技能和更多年限经验",
    "此签证是留学后转就劳最常见的路径",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpStudentToPR: ImmigrationProgram = {
  id: "jp-student-pr",
  name: "留学→就劳→永住路径",
  englishName: "Student → Employment → Permanent Residency Path",
  summary:
    "日本最完整的留学移民链路：留学签证→毕业→就劳签证→持续工作→满足10年居住（5年就劳）→永住申请。若就读日本大学/专门学校，就业后累计居住年限可满足永住条件。",
  category: "留学转永居",
  minRequirements: [
    { dimension: "年限", value: "累计居住10年，其中就劳5年以上", note: "留学期间计入10年居住，但就劳必须≥5年" },
    { dimension: "收入", value: "年收入≥300万日元", note: "永住申请时需证明有稳定且足够的收入来源" },
    { dimension: "语言等级", value: "JLPT N2以上（永住审查参考）", note: "无硬性要求但实际审查中日语能力是重要考量" },
    { dimension: "学历", value: "日本大学/专门学校毕业优先", note: "日本学历更受审查官认可，就业匹配度更高" },
    { dimension: "其他", value: "无重大违法/欠税记录", note: "纳税义务履行是永住审查重点" },
  ],
  targetAudience: ["留学生", "日本大学毕业生", "专门学校毕业生", "日语专业学生", "希望在日长期发展的年轻人"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "永住审查约6～12个月",
  keyNotes: [
    "留学期间计入10年居住年限，但就劳期间必须≥5年",
    "高度人才签证持有者可加速：80分1年、70分3年可申永住",
    "日本大学毕业者在就业匹配审查中更有优势",
    "永住审查重点：居住年限、收入稳定性、纳税/社保缴纳记录、品行",
    "专门学校（専修学校専門課程）毕业生也可以此路径获得就劳签证",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpSpecifiedSkilled: ImmigrationProgram = {
  id: "jp-ssw",
  name: "特定技能签证",
  englishName: "Specified Skilled Worker Visa (SSW / Tokutei Ginou)",
  summary:
    "2019年新设签证类别，面向14个严重人手不足的行业领域。1号允许最长5年居留（不可带家属），2号可无限期续签并带家属，是通往永住的潜在路径。需通过技能测试和日语测试。",
  category: "技术移民",
  minRequirements: [
    { dimension: "语言等级", value: "JLPT N4以上（1号） / N3以上（2号参考）", note: "1号需通过日语能力测试或日本语测试；2号要求更高" },
    { dimension: "职业类别", value: "14个指定行业领域", note: "介护、宿泊、农业、渔业、食品制造、饮料制造、建筑、造船、自动车维修、航空、锻造、铸造、电気情报、建设资材" },
    { dimension: "其他", value: "通过技能测试和日语测试", note: "各领域有对应技能测试，介护领域需通过介护日语测试" },
    { dimension: "年限", value: "1号最长5年 / 2号可无限期续签", note: "1号不可带家属；2号可带配偶子女，可转为永住" },
  ],
  targetAudience: ["制造业工人", "介护/护理人员", "农业从业者", "建筑工人", "餐饮/住宿业从业者"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约2～4个月",
  keyNotes: [
    "1号签证最长5年，到期后需转为2号或更换签证类别",
    "1号不可携带家属，2号可以带配偶和子女",
    "技能测试在各领域设有独立考试，部分有日语版和外语版",
    "从1号转2号需更高技能水平和更多年限经验",
    "2号签证可无限期续签，是通往永住的路径",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpPermanentResidence: ImmigrationProgram = {
  id: "jp-pr",
  name: "永住许可",
  englishName: "Permanent Residency (Eiju Kyoka)",
  summary:
    "日本永久居留权，无签证期限限制，可自由更换工作。普通路径需连续居住10年（其中就劳5年以上），高度人才路径可大幅缩短至1～3年。",
  category: "长期居留转永居",
  minRequirements: [
    { dimension: "年限", value: "连续居住10年（普通）/ 3年（HSPV 70分）/ 1年（HSPV 80分）", note: "10年路径中就劳期间需≥5年" },
    { dimension: "收入", value: "年收入≥300万日元", note: "需证明收入稳定且足以维持生活" },
    { dimension: "其他", value: "纳税/社保缴纳义务履行完毕", note: "欠税或未缴纳社保会直接导致拒签" },
    { dimension: "其他", value: "品行善良，无重大违法记录", note: "交通违规等也可能影响审查" },
    { dimension: "其他", value: "有日本国籍或永住者作为身元保证人", note: "保证人需有稳定收入" },
  ],
  targetAudience: ["长期居住日本的就劳签证持有者", "高度人才签证持有者", "经营管理签证长期持有者", "日配配偶（3年可申永住）"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约6～12个月",
  keyNotes: [
    "高度人才积分80分只需1年居住即可申请永住，大幅缩短等待",
    "日本配偶者仅需3年婚姻且1年居住即可申请",
    "永住后可自由更换雇主，无签证期限限制",
    "审查重点：居住年限、收入、纳税、品行、是否有保证人",
    "永住者仍需每7年更新在留卡（仅为手续，不影响永住身份）",
  ],
  status: "open",
  lastVerified: "2026-05",
};

const jpNaturalization: ImmigrationProgram = {
  id: "jp-naturalization",
  name: "归化（入籍）",
  englishName: "Naturalization (Kika)",
  summary:
    "日本国籍取得路径。普通归化需连续居住5年以上，有稳定收入，品行善良，且需放弃原有国籍（日本原则上不承认双重国籍）。高度人才居住3年可申请归化。",
  category: "入籍路径",
  minRequirements: [
    { dimension: "年限", value: "连续居住5年（普通）/ 3年（高度人才80分）", note: "需实际在日本居住，长期海外出差可能中断连续性" },
    { dimension: "收入", value: "有稳定且持续的收入来源", note: "需能独立或以家庭为单位维持生活" },
    { dimension: "语言等级", value: "约JLPT N3以上水平", note: "归化面试中需用日语进行交流，无正式考试要求但实际需要" },
    { dimension: "其他", value: "品行善良", note: "无重大犯罪或违法记录" },
    { dimension: "其他", value: "放弃原有国籍", note: "日本原则上要求单一国籍，实际执行中个案有差异" },
  ],
  targetAudience: ["长期居住日本的外国人", "高度人才签证持有者", "日配配偶", "希望取得日本国籍者"],
  officialLink: "https://www.moj.go.jp/isa/content/001363019.pdf",
  processingTime: "约6～12个月",
  keyNotes: [
    "日本原则上不承认双重国籍，归化需声明放弃原有国籍",
    "归化条件比永住略低（5年vs10年居住），但需放弃国籍",
    "高度人才积分80分只需3年居住即可申请归化",
    "归化面试需用日语回答，实际日语水平需达到日常对话程度",
    "配偶为日本国籍者条件可放宽：3年婚姻+1年居住",
  ],
  status: "open",
  lastVerified: "2026-05",
};

// ========== Country Data ==========

export const japan: CountryData = {
  slug: "japan",
  country: "日本",
  englishName: "Japan",
  region: "东亚",
  overview:
    "日本是世界第三大经济体，拥有高度发达的科技产业和完善的社保体系。2019年后大幅放宽外国人入境政策，设立特定技能签证和高度人才积分制，为技术人才、创业者和留学生提供多条通往永住/归化的路径。2024年进一步优化签证类别结构。高度人才积分80分仅需1年即可申请永住，是发达国家中最快的永住加速机制之一。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["高技能人才签证", "技术移民", "创业 / 投资路径", "留学转永居", "长期居留转永居", "入籍路径"],
  programs: [jpHspv, jpBusinessManager, jpEngineer, jpStudentToPR, jpSpecifiedSkilled, jpPermanentResidence, jpNaturalization],
  bestFor: ["IT/STEM高技能人才", "创业者/中小企业经营者", "日本大学留学生", "日语能力强的技术人才", "寻求快速永住的高收入专业人士"],
  residency:
    "普通永住需连续居住10年（就劳≥5年），高度人才70分3年/80分1年可申永住。日本配偶3年可申。永住后无签证期限限制，可自由就业。永住者需每7年更新在留卡。",
  citizenship:
    "归化（入籍）需连续居住5年，有稳定收入，品行善良，并放弃原有国籍（日本原则上单一国籍）。高度人才80分3年可申请归化。日本配偶归化条件更宽松。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["出入国在留管理厅 (ISA)", "法务省", "日本贸易振兴机构 (JETRO)"]),
};