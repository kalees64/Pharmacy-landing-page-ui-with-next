#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: node react-cli.js c c <path/to/ComponentName>");
  process.exit(1);
}

// Use the last argument as the full path
const fullPath = args[args.length - 1]; // src/components/PharmacyService
const componentName = path.basename(fullPath); // PharmacyService
const folderPath = path.resolve(path.dirname(fullPath), componentName);

// Create folder
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`Created folder: ${folderPath}`);
} else {
  console.log(`Folder already exists: ${folderPath}`);
}

// Create TSX file
const tsxFilePath = path.join(folderPath, `${componentName}Component.tsx`);
const tsxContent = `import React from "react";
import "./${componentName}Component.css";

export default function ${componentName}Component() {
  return <div>${componentName}</div>;
}
`;

fs.writeFileSync(tsxFilePath, tsxContent, "utf8");
console.log(`Created file: ${tsxFilePath}`);

// Create CSS file
const cssFilePath = path.join(folderPath, `${componentName}Component.css`);
const cssContent = `/* Styles for ${componentName} */\n`;

fs.writeFileSync(cssFilePath, cssContent, "utf8");
console.log(`Created file: ${cssFilePath}`);
