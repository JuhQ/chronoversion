# chronoversion

[https://github.com/JuhQ/chronoversion](https://github.com/JuhQ/chronoversion)

## Description

Chronoversion is a simple versioning system for your projects.

## How to use

### Installation

```bash
npm install chronoversion
```

### Usage

```javascript
import chronoversion from "chronoversion";

const version = chronoversion("2025.1.1"); // output: 2025.1.2
const version = chronoversion(); // output: 2025.1.1 if current year is 2025 and current month is January
```
