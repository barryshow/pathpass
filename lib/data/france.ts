import type { CountryData, ImmigrationProgram } from "../types";
import { defaultDevelopedScope, defaultCaution, makeDefaultSources } from "./helpers";

const programs: ImmigrationProgram[] = [
  {
    id: "fr-pt-talent",
    name: "人才护照",
    englishName: "Passeport Talent",
    summary:
      "面向高技能、创业者、研究员、艺术家等8个子类别的统一高端人才签证；有效期最长4年，家属可随行并工作。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "雇员子类须达法国最低工资2倍(约€3,420/月，2024年SMIC约€1,710)", note: "研究员与艺术家子类有不同标准" },
      { dimension: "学历", value: "硕士及以上（雇员子类）", note: "或5年同等级专业经验" },
      { dimension: "职业类别", value: "须符合Passeport Talent 8个子类之一", note: "雇员/创业者/研究员/艺术家/创新项目/企业投资者/欧盟蓝卡/公司内部调动" },
    ],
    targetAudience: ["高技能专业人士", "科研人员", "艺术家", "创新创业者", "跨国公司调派高管"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/passeport-talent",
    processingTime: "约4–8周",
    keyNotes: [
      "Passeport Talent涵盖8个子类别，申请人须符合其中之一",
      "有效期最长4年（部分子类为3年），远优于普通工作签证1年有效期",
      "配偶与子女可随行并获得自由工作许可（无需额外就业许可）",
      "雇员子类薪资须达2倍SMIC（约€3,420/月，含假期津贴约€3,660）",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-pt-eubc",
    name: "人才护照·欧盟蓝卡子类",
    englishName: "Passeport Talent – EU Blue Card sub-category",
    summary:
      "Passeport Talent下的欧盟蓝卡子类，面向高学历高薪非欧盟公民；薪资须达1.5倍SMIC且有雇主合同。",
    category: "高技能人才签证",
    minRequirements: [
      { dimension: "收入", value: "1.5倍法国最低工资(约€2,565/月，2024年SMIC约€1,710)", note: "不含假期津贴另算" },
      { dimension: "学历", value: "硕士及以上", note: "或5年渐进式相关专业经验" },
      { dimension: "年限", value: "雇主合同至少1年", note: "" },
    ],
    targetAudience: ["高学历高薪专业人才", "IT与工程领域专业人士", "跨国公司调派员工"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/eu-blue-card",
    processingTime: "约4–6周",
    keyNotes: [
      "蓝卡子类薪资门槛为1.5倍SMIC（比普通Passeport Talent雇员子类2倍SMIC更低）",
      "蓝卡持有者18个月后家属可随行工作",
      "蓝卡可在其他欧盟国家携带转换",
      "连续持蓝卡5年可申请长期居留",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-salarie",
    name: "雇员签证Salarié",
    englishName: "Salarié (Employee Work Permit)",
    summary:
      "面向有法国雇主合同的外国人的常规工作签证与居留许可；需雇主先取得劳动局(DIRECCTE)的工作许可(autorisation de travail)。",
    category: "雇主担保",
    minRequirements: [
      { dimension: "收入", value: "须达到法国最低工资(SMIC)以上", note: "2024年SMIC约€1,710/月(net)" },
      { dimension: "职业类别", value: "须有法国雇主正式合同(CDD或CDI)", note: "雇主需先取得工作许可" },
      { dimension: "学历", value: "无硬性学历要求", note: "但雇主需证明无法在法国/EEA找到合适人选" },
    ],
    targetAudience: ["有法国雇主offer的中等技能工作者", "非高技能但有明确雇佣机会者"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/working-in-france",
    processingTime: "约2–4个月（含劳动局审批）",
    keyNotes: [
      "雇主须先向DIRECCTE申请autorisation de travail（工作许可）",
      "雇主需证明该岗位无法在法国或EEA市场招聘到合适人选",
      "签证有效期与雇主合同期限一致（通常1–3年）",
      "更换雇主需重新申请工作许可",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-study",
    name: "留学→求职→工作",
    englishName: "Study → Recherche d'emploi → Work",
    summary:
      "在法国完成硕士及以上学历后可申请APS(Autorisation Provisoire de Séjour)求职签证1年，期间可工作(非全职上限60%)或创业；找到合适工作后转为对应工作居留。",
    category: "留学转永居",
    minRequirements: [
      { dimension: "学历", value: "法国硕士及以上(或等效博士)", note: "须在法国高校完成" },
      { dimension: "年限", value: "APS求职签证1年（不可续签）", note: "部分国家毕业生可额外获6个月" },
      { dimension: "金额", value: "留学期间学费+生活费约€10,000+/年", note: "" },
    ],
    targetAudience: ["法国硕士/博士毕业生", "希望在法国求职的国际学生", "商校与理工科毕业生"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/looking-for-a-job-or-setting-up-a-business",
    processingTime: "约2–4周",
    keyNotes: [
      "APS仅限硕士及以上毕业生，学士毕业生不适用",
      "APS期间可工作但上限为法定工时60%(即每周约21.6小时)",
      "APS不可续签，需在1年内找到工作并转换居留类型",
      "找到符合Passeport Talent或Salarié条件的工作后可转换",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-startup",
    name: "创业/自雇",
    englishName: "Passeport Talent – Innovator / Self-employed",
    summary:
      "Passeport Talent下的创新创业者子类与自雇子类；创业者需有创新项目并获得认可机构支持，自雇人士需证明专业资质与收入能力。",
    category: "创业 / 投资路径",
    minRequirements: [
      { dimension: "金额", value: "创业者子类无最低投资额；企业投资者子类须投资€300K以上", note: "创业者需认可机构letter of support" },
      { dimension: "其他", value: "创业子类须有创新项目并获French Tech认可机构支持信", note: "认可机构名单由French Tech维护" },
      { dimension: "收入", value: "自雇子类须达到SMIC以上收入预期", note: "" },
    ],
    targetAudience: ["创新创业者", "French Tech项目参与者", "自雇专业人士", "企业投资者"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/passeport-talent",
    processingTime: "约4–8周",
    keyNotes: [
      "创业者子类需获得French Tech认可机构的支持信(letter of support)",
      "企业投资者子类需实际投资€300K以上并创造/保住就业",
      "Passeport Talent创业/自雇有效期最长4年",
      "配偶可随行并获得自由工作权",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-long-res",
    name: "长期居留",
    englishName: "Carte de résident (Long-term Residence)",
    summary:
      "在法国连续合法居住5年（部分情况可缩短）后可申请10年有效的长期居留卡(carte de résident)；享有自由工作与居住权利。",
    category: "长期居留转永居",
    minRequirements: [
      { dimension: "年限", value: "连续合法居住5年", note: "Passeport Talent持有者可缩短；家庭团聚者3年" },
      { dimension: "收入", value: "稳定且充足收入来源", note: "不可依赖社会救助" },
      { dimension: "语言等级", value: "法语A2水平(DELF A2或同等)", note: "2024年起要求提升" },
      { dimension: "其他", value: "无犯罪记录，健康保险，融入社会", note: "" },
    ],
    targetAudience: ["在法国连续合法居住5年者", "Passeport Talent长期持有者", "家庭团聚居留者"],
    officialLink: "https://france-visas.gouv.fr/en/web/france-visas/long-stay-in-france",
    processingTime: "约3–6个月",
    keyNotes: [
      "carte de résident有效期10年，可续签",
      "5年居住期间不可有长时间离境中断",
      "法语要求A2水平，可通过DELF考试或公民融入课程证明",
      "Passeport Talent持有者在特定条件下可缩短等待年限",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
  {
    id: "fr-citizenship",
    name: "入籍5年/2年(硕士)",
    englishName: "Naturalisation (French Citizenship)",
    summary:
      "常规入籍需5年连续居住；在法国完成硕士及以上学历可缩短为2年；需法语B1水平、融入社会、品行良好。承认双重国籍。",
    category: "入籍路径",
    minRequirements: [
      { dimension: "年限", value: "连续居住5年（法国硕士/博士毕业生为2年）", note: "硕士缩短至2年是重要优势" },
      { dimension: "语言等级", value: "法语B1水平(DELF B1或同等)", note: "2024年起入籍语言要求从A2提升至B1" },
      { dimension: "其他", value: "融入法国社会、品行端正、稳定收入、无犯罪记录", note: "" },
    ],
    targetAudience: ["长期定居法国者", "法国硕士/博士毕业生", "与法国公民结婚者", "Passeport Talent持有者"],
    officialLink: "https://www.service-public.fr/particuliers/Vosdroits/F2674",
    processingTime: "约12–18个月",
    keyNotes: [
      "在法国完成硕士或博士可将入籍居住年限从5年缩短至2年，这是法国的独特优势",
      "与法国公民结婚者居住4年后可申请（需婚姻真实持续3年以上）",
      "法国承认双重国籍，无需放弃原国籍",
      "2024年起入籍法语要求从A2提升至B1",
    ],
    status: "open",
    lastVerified: "2026-05",
  },
];

export const france: CountryData = {
  slug: "france",
  country: "法国",
  englishName: "France",
  region: "西欧",
  overview:
    "法国以Passeport Talent人才护照为高端人才核心通道，涵盖8个子类别，配偶可自由工作；硕士毕业生入籍2年缩短路径是独特优势；APS求职签证为毕业生提供1年过渡期。",
  developedScope: defaultDevelopedScope,
  pathwayCategories: ["高技能人才签证", "雇主担保", "留学转永居", "创业 / 投资路径", "长期居留转永居", "入籍路径"],
  programs,
  bestFor: ["法国硕士毕业生(2年入籍优势)", "高技能专业人士", "创新创业者", "科研人员", "法语B1以上人才"],
  residency:
    "连续合法居住5年后可申请10年carte de résident长期居留；需法语A2、稳定收入与融入证明。",
  citizenship:
    "常规5年连续居住入籍；法国硕士/博士毕业生可缩短至2年；需法语B1(2024年起)、融入社会、品行良好。承认双重国籍。",
  caution: defaultCaution,
  sourceNames: makeDefaultSources(["France-Visas (france-visas.gouv.fr)", "法国内政部(Ministère de l'Intérieur)", "DETEFP (Direction du travail)"]),
};