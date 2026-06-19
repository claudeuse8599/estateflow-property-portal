import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { extname } from "node:path";

const blockedExtensions = new Set([
  ".avif",
  ".gif",
  ".ico",
  ".jpg",
  ".jpeg",
  ".mov",
  ".mp4",
  ".pdf",
  ".png",
  ".webp"
]);

const secretPatterns = [
  { name: "OpenAI-style secret key", regex: /(^|[^A-Za-z0-9])sk-(proj-)?[A-Za-z0-9_-]{35,}/ },
  { name: "Google API key", regex: /AIza[0-9A-Za-z_-]{30,}/ },
  { name: "GitHub personal access token", regex: /ghp_[0-9A-Za-z_]{30,}/ },
  { name: "GitHub fine-grained token", regex: /github_pat_[0-9A-Za-z_]{30,}/ },
  { name: "Slack token", regex: /xox[baprs]-[0-9A-Za-z-]{30,}/ },
  { name: "Browser-exposed private env key", regex: /(VITE_|NEXT_PUBLIC_|REACT_APP_)[A-Z0-9_]*(API_KEY|SECRET|TOKEN)/i }
];

function gitFiles(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8" })
      .split("\0")
      .filter(Boolean);
  } catch {
    return [];
  }
}

const files = [
  ...gitFiles(["ls-files", "-z"]),
  ...gitFiles(["ls-files", "--others", "--exclude-standard", "-z"])
];

const findings = [];

for (const file of [...new Set(files)]) {
  if (!existsSync(file)) continue;
  if (blockedExtensions.has(extname(file).toLowerCase())) continue;
  if (file.startsWith(".git/")) continue;

  let source = "";
  try {
    source = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const pattern of secretPatterns) {
    if (pattern.regex.test(source)) {
      findings.push({ file, pattern: pattern.name });
    }
  }
}

if (findings.length) {
  console.error("Security scan found possible secret exposure:");
  for (const finding of findings) {
    console.error(`- ${finding.file}: ${finding.pattern}`);
  }
  process.exit(1);
}

console.log("Security scan passed. No high-confidence secrets found.");
