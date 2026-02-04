module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: "docs: ${nextRelease.version}",
      },
    ],
  ],
//   prepareCmd: "npm version ${nextRelease.version} -m 'docs: %s'",
//   verifyConditions: ["@semantic-release/github"],
//   publish: ["@semantic-release/github"],
//   repositoryUrl: process.env.GITHUB_URL,
//   githubToken: process.env.GITHUB_TOKEN,
};
