let input = document.querySelectorAll("input")


const rgbToHex = function(rgb) {
    let hex = Number(rgb).toString(16)
    if (hex.length < 2) {
        hex = "0" + hex
    }
    return hex
}


document.body.style.backgroundColor = "rgb(0, 0, 0)"

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        const red = document.getElementById("rRange_weight").value
        const green = document.getElementById("gRange_weight").value
        const blue = document.getElementById("bRange_weight").value
        const hexValue = document.getElementById("hex")
        document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
        hexValue.value = '#' + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue)
    })
}
