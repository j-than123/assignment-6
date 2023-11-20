var inputText = document.getElementById("inputText")
var key = document.getElementById("key")
var outputText = document.getElementById("outputText")

var encryptButton = document.getElementById("encrypt-button")
var decryptButton = document.getElementById("decrypt-button")
var switchButton = document.getElementById("switch-button")

// const fs = require("fs")

function onClickEncryption(event) {
    const encrypted = CryptoJS.AES.encrypt(inputText.value, key.value) 

    outputText.value = encrypted
}

function onClickDecryption(event) {
    const decrypted = CryptoJS.AES.decrypt(inputText.value, key.value) 

    outputText.value = decrypted.toString(CryptoJS.enc.Utf8)
}

function switchOutputInputFields(event) {
    // let temp = inputText.value 
    inputText.value = outputText.value
    outputText.value = ""
}

encryptButton.addEventListener("click", function () {
    if(inputText.value && key.value) {
        // writeToEncryptFile(inputText.value)
        // writeToKeyFile(key.value)
        onClickEncryption()
    }
    
})
    
decryptButton.addEventListener("click", function () {
    if(inputText.value && key.value) {
        onClickDecryption()
    }
})

switchButton.addEventListener("click", function () {
    if(inputText.value && outputText.value) {
        switchOutputInputFields()
    }
})
