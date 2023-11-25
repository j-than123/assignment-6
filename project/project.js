var inputText = document.getElementById("inputText")
var key = document.getElementById("key")
var outputText = document.getElementById("outputText")

var encryptButton = document.getElementById("encrypt-button")
var decryptButton = document.getElementById("decrypt-button")
var switchButton = document.getElementById("switch-button")
// var tooltips = document.getElementsByClassName("tooltip")

function onClickEncryption(event) {
    const encrypted = CryptoJS.AES.encrypt(inputText.value, key.value) 

    outputText.value = encrypted
}

function onClickDecryption(event) {
    const decrypted = CryptoJS.AES.decrypt(inputText.value, key.value) 

    outputText.value = decrypted.toString(CryptoJS.enc.Utf8)
}

function switchOutputInputFields(event) {
    inputText.value = outputText.value
    outputText.value = ""
}



encryptButton.addEventListener("click", function () {
    if(inputText.value && key.value) {
        onClickEncryption()
    }

    else {
        alert("Please provide some input and a key value")
    }
})
    
decryptButton.addEventListener("click", function () {
    if(inputText.value && key.value) {
        onClickDecryption()
    }

    else {
        alert("Please provide some input and a key value")
    }    
})

switchButton.addEventListener("click", function () {
    if(outputText.value) {
        switchOutputInputFields()
    }

    else {
        alert("Output field is empty")
    }
})

// tooltips.addEventListener("click", function () {
//     for (var i = 0; i < tooltips.length; i++) {
//         console.log(tooltips[i].firstElementChild)
//         tooltips[i].classList.toggle("tooltiptext")
//     }
// })