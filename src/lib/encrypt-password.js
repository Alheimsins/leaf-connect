const Blowfish = require('blowfish-node')

module.exports = (password, passwordEncryptionKey) => {
  const bf = new Blowfish(passwordEncryptionKey, Blowfish.MODE.ECB);
  return bf.encodeToBase64(password)
}
