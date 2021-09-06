// packages
const CryptoJS = require("crypto-js");
const config = require("config");

// Encrypt password
exports.EncryptPassword = (password) => {
  let secretKey = config.get("secretKeys").cryptopjs;
  var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
  return encryptedPassword;
};
