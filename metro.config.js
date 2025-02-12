const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Reduce file watching to prevent "EMFILE" errors
config.watchFolders = []; 
config.resolver = {
     sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Only these files are processed
   };
config.server = {
  enableVisualizer: false, // Reduces memory usage
  workerCount: 2, // Reduce the number of parallel processes
};

module.exports = config;
