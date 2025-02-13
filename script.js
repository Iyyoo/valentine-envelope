let passcode = "1012";
let input = "";

function pressKey(num) {
    if (input.length < 4) {
        input += num;
        updateDisplay();
    }
}

function deleteKey() {
    input = input.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    let hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => {
        heart.style.opacity = index < input.length ? "1" : "0.3";
    });
}

function checkPasscode() {
    if (input === passcode) {
        window.location.href = "valentine.html";
    } else {
        document.getElementById("message").innerText = "Passcode salah!";
        input = "";
        updateDisplay();
    }
}
