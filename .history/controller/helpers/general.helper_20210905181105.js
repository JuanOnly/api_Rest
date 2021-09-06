// packages
var CryptoJS = require("crypto-js");

// Encrypt password
exports.EncryptPassword = (password) => {
  var encryptedPassword = CryptoJS.AES.encrypt(
    password,
    "secret key 123"
  ).toString();
};
