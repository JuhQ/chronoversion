"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
describe("chronoversion", () => {
    const originalDate = global.Date;
    beforeAll(() => {
        // Mock Date to control the current date
        global.Date = class extends Date {
            constructor() {
                super();
                return new originalDate("2025-01-09T11:55:50Z");
            }
        };
    });
    afterAll(() => {
        // Restore original Date implementation
        global.Date = originalDate;
    });
    test("should return current year and month with version 1 if currentVersion is undefined", () => {
        expect((0, _1.default)(undefined)).toBe("2025.1.1");
    });
    test("should increment version if currentVersion is from the same year and month", () => {
        expect((0, _1.default)("2025.1.1")).toBe("2025.1.2");
    });
    test("should reset version if currentVersion is from a different year", () => {
        expect((0, _1.default)("2024.12.9")).toBe("2025.1.1");
    });
    test("should reset version if currentVersion is from a different month", () => {
        expect((0, _1.default)("2025.12.9")).toBe("2025.1.1");
    });
    test("should handle versions with more than one digit correctly", () => {
        expect((0, _1.default)("2025.1.9")).toBe("2025.1.10");
    });
    test("should handle versions with multiple digits correctly", () => {
        expect((0, _1.default)("2025.1.99")).toBe("2025.1.100");
        expect((0, _1.default)("2025.1.999")).toBe("2025.1.1000");
    });
    describe("edge cases", () => {
        test("should handle single digit months correctly", () => {
            // TODO: use jest mocks to control the current date
            // TODO: remove noConstructorReturn rule from biome.json once the Date constructor is mocked
            global.Date = class extends Date {
                constructor() {
                    super();
                    return new originalDate("2025-02-09T11:55:50Z");
                }
            };
            expect((0, _1.default)("2025.1.2")).toBe("2025.2.1");
        });
        test("should handle February 28th in a non-leap year", () => {
            global.Date = class extends Date {
                constructor() {
                    super();
                    return new originalDate("2025-02-28T11:55:50Z");
                }
            };
            expect((0, _1.default)("2025.2.1")).toBe("2025.2.2");
        });
        test("should handle February 29th in a leap year", () => {
            global.Date = class extends Date {
                constructor() {
                    super();
                    return new originalDate("2024-02-29T11:55:50Z");
                }
            };
            expect((0, _1.default)("2024.2.1")).toBe("2024.2.2");
        });
        test("should handle March 1st after February 28th in a non-leap year", () => {
            global.Date = class extends Date {
                constructor() {
                    super();
                    return new originalDate("2025-03-01T11:55:50Z");
                }
            };
            expect((0, _1.default)("2025.2.1")).toBe("2025.3.1");
        });
        test("should handle March 1st after February 29th in a leap year", () => {
            global.Date = class extends Date {
                constructor() {
                    super();
                    return new originalDate("2024-03-01T11:55:50Z");
                }
            };
            expect((0, _1.default)("2024.2.1")).toBe("2024.3.1");
        });
    });
});
