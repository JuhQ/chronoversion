"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chronoversion(currentVersion) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // getMonth() returns 0-indexed month
    if (!currentVersion) {
        return `${currentYear}.${currentMonth}.1`;
    }
    const [year, month, version] = currentVersion.split(".").map(Number);
    if (year === currentYear && month === currentMonth) {
        return `${currentYear}.${currentMonth}.${version + 1}`;
    }
    return `${currentYear}.${currentMonth}.1`;
}
exports.default = chronoversion;
