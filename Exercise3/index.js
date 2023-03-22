const submit = document.querySelector(".submit")

function changeColor() {
    var color = document.getElementById('color').value
    var body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = color
}

