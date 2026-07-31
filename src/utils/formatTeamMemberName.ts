/** 姓名为两字时，用全角空分隔姓/名，避免半角空格在 Windows 下造成 baseline 不齐 */
export function formatTeamMemberDisplayName(name: string): string {
  const compact = name.replace(/\s+/g, "");
  if (compact.length === 2) {
    return `${compact[0]}\u3000${compact[1]}`;
  }
  return compact;
}
