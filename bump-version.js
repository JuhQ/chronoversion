const fs = require("fs");
const path = require("path");
const { getVersion } = require("./dist/index.js");

function updatePackageVersion() {
  const packageJsonPath = path.resolve(__dirname, "package.json");

  let packageJson;
  try {
    const fileContent = fs.readFileSync(packageJsonPath, "utf8");
    packageJson = JSON.parse(fileContent);
  } catch (error) {
    console.error("Failed to read or parse package.json:", error.message);
    process.exit(1);
  }

  const currentVersion = packageJson.version;
  const newVersion = getVersion(currentVersion);

  packageJson.version = newVersion;

  try {
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );
    console.log(`Updated version from ${currentVersion} to ${newVersion}`);
  } catch (error) {
    console.error("Failed to write updated package.json:", error.message);
    process.exit(1);
  }
}

updatePackageVersion();
