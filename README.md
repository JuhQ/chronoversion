# chronoversion

[https://github.com/JuhQ/chronoversion](https://github.com/JuhQ/chronoversion)

## Description

Chronoversion is a simple and intuitive versioning system for your projects. It uses a date-based versioning format that makes it easy to track the evolution of your software over time.

### Versioning Format

Chronoversion follows the format `YYYY.MM.PATCH`, where:

- `YYYY` is the four-digit year.
- `MM` is the two-digit month.
- `PATCH` is the incremental patch number for the given month.

### Rules for Version Incrementation

1. If there is no existing version, the initial version is set to `YYYY.MM.1`.
2. If the current year and month match the existing version, the patch number is incremented by 1.
3. If the current year or month does not match the existing version, the version is reset to `YYYY.MM.1`.

### Key Features and Benefits

- **Simplicity**: Easy to understand and implement.
- **Date-Based**: Provides a clear timeline of changes and releases.
- **Automatic Incrementation**: Automatically increments the version number based on the current date.
- **Consistency**: Ensures consistent versioning across your projects.

### Use Cases

- **Frequent Releases**: Ideal for projects with frequent releases, as it provides a clear and chronological version history.
- **Continuous Deployment**: Useful in continuous deployment environments where new versions are released regularly.
- **Project Tracking**: Helps in tracking the progress and changes in long-term projects.

## How to use

### Installation

```bash
npm install chronoversion
```

### Usage

```javascript
import chronoversion from "chronoversion";

// Manually specify version
const manualVersion = chronoversion("2025.1.1"); // Returns: 2025.1.2

// Auto-generate version based on current date
const autoVersion = chronoversion(); // Returns: YYYY.MM.1 (e.g., 2025.1.1 in January 2025)

// Error handling
try {
  const invalidVersion = chronoversion("invalid.version");
} catch (error) {
  console.error("Invalid version format");
}
```
