module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["/node_modules/(?!native-base)/"],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"]
};
