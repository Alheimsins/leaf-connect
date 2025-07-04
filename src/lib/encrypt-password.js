const crypto = require('crypto');

module.exports = (password, key, iv) => {
  const keyBuffer = Buffer.from(key, 'utf8');
  const ivBuffer = Buffer.from(iv, 'utf8');

  const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, ivBuffer);
  let encrypted = cipher.update(password, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  return encrypted;
}
