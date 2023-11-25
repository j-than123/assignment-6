var encryptButton = document.getElementById("encrypt-button")
var decryptButton = document.getElementById("decrypt-button")
var key = document.getElementById("key")
const image = document.getElementById('image')

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
        var reader = new FileReader()
        reader.onloadend = function() {
            callback(reader.result)
        }
        reader.readAsDataURL(xhr.response)
    };
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
}
  
var ogImage;
toDataURL('http://placekitten.com/200/300', function(dataUrl) {
    console.log('RESULT:', dataUrl)
    ogImage = dataUrl
    image.src = dataUrl
})

var encrypted;
function onClickEncryption(event) {
    encrypted = CryptoJS.AES.encrypt(ogImage, key.value)
    console.log(encrypted)

    image.src = ""

    var responseBody = document.createElement("h3")
    responseBody.textContent = "successful encryption"
    responseBody.setAttribute("id", "response")
    var body = document.getElementById("whole-body")
    body.appendChild(responseBody)
}

function onClickDecryption(event) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, key.value) 
    console.log(decrypted)

    image.src = decrypted.toString(CryptoJS.enc.Utf8)
    console.log(image.src)
    
    document.getElementById("response").remove()
}

encryptButton.addEventListener("click", function () {
    if(key.value) {
        onClickEncryption()
    } 
})
    
decryptButton.addEventListener("click", function () {
    if(encrypted != null && key.value) {
        onClickDecryption()
    }
})