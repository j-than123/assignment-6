const CryptoJS = require("node_modules/crypto-js");


// import sha256 from 'crypto-js/sha256'
// import hmacSHA512 from 'crypto-js/hmac-sha512'
// import Base64 from 'crypto-js/enc-base64'

var inputText = document.getElementById("inputText")
var key = document.getElementById("key")
var outputText = document.getElementById("outputTexxt")

var encryptButton = document.getElementById("encrypt-button")

function onClickEncryption(inputText, key, outputText) {
    const encrypted = CryptoJS.AES.encrypt(inputText, key) 

    document.getElementById(outputText).innerHTML = encrypted
}

var decryptButton = document.getElementById("decrypt-button")

function onClickDecryption(inputText, key, outputText) {
    const decrypted = CryptoJS.AES.decrypt(inputText, key) 

    document.getElementById(outputText).innerHTML = decrypted
}

if (inputText && key) {
    encryptButton.addEventListener("click", onClickEncryption(inputText, key, outputText))
    decryptButton.addEventListener("click", onClickDecryption(inputText, key, outputText))
} 