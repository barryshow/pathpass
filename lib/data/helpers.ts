export const defaultDevelopedScope =
  "首版按 IMF advanced economies 与联合国发达地区口径交叉整理，并以各国官方签证 / 移民部门为最终核验来源。";

export const defaultCaution =
  "政策、配额、金额、语言等级和审批周期会变化；正式申请前必须以官方页面和持牌专业人士意见为准。";

export const defaultSourceNames = [
  "本国移民 / 内政 / 司法主管部门",
  "本国外交部或签证主管部门",
  "OECD International Migration Outlook",
  "IMF advanced economies country classification",
  "UN M49 regional classification",
];

export function makeDefaultSources(extra: string[] = []): string[] {
  return [...extra, ...defaultSourceNames];
}