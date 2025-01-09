export function getVersion(currentVersion?: string): string {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth() returns 0-indexed month

  if (!currentVersion) {
    return `${currentYear}.${currentMonth}.1`;
  }

  const [year, month, version] = currentVersion.split(".").map(Number);

  if (year === currentYear && month === currentMonth) {
    return `${currentYear}.${currentMonth}.${version + 1}`;
  } else {
    return `${currentYear}.${currentMonth}.1`;
  }
}
