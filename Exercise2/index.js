const small = document.querySelector(".small")
const big = document.querySelector(".big")
const para = document.querySelector(".para")

small.addEventListener("click", function() {
    document.getElementById("para").style.fontSize = "1px";
    // if (document.para.style.fontSize > "1px") {
    //     document.para.style.fontSize -= 1
    // } else {
    //     document.para.style.fontSize = 1
    // }
    console.log("Smaller")
})

big.addEventListener("click", function() {
    document.getElementById("para").style.fontSize = "100px";
    // if (document.para.style.fontWeight < "100px") {
    //     document.para.style.fontWeight += 1
    // } else {
    //     document.para.style.fontWeight = 100
    // }
    console.log("Bigger")
})