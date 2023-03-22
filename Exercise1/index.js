const button = document.querySelector("button")
let counterValue = 0
button.addEventListener("click", function() {
    let counterHTML = document.querySelector(".number");
    counterHTML.innerHTML = counterValue += 1;
    console.log(counterHTML.innerText)
    //counterValue++
})
