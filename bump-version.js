const fs = require("fs");
const path = require("path");
const { getVersion } = require("./dist/index.js");

function updatePackageVersion() {
  const packageJsonPath = path.resolve(__dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  const currentVersion = packageJson.version;
  const newVersion = getVersion(currentVersion);

  packageJson.version = newVersion;

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8"
  );
  console.log(`Updated version from ${currentVersion} to ${newVersion}`);
}

updatePackageVersion();
