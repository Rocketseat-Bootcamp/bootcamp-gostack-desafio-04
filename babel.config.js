module.exports = {
  presets: [
    "@babel/preset-env", // Traduz o JS que o navegador não entende
    "@babel/preset-react" // Traduz o React que o navegador não entende
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
