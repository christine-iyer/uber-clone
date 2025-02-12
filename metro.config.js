const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.watchFolders = [];
config.resolver = {
  sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Only process necessary file types
};

config.server = {
  enableVisualizer: false, // Reduce memory usage
  workerCount: 2, // Limit Metro’s parallel processing
};

// 🚀 This is the key part: Disable file watching and force polling
config.maxWorkers = 1;
config.projectRoot = __dirname;
config.cacheStores = [];

module.exports = config;
