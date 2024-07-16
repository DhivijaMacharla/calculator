function display(value) {
    let screen = document.getElementById("output-screen");
    if (screen.value === "0") {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

function allClear() {
    document.getElementById("output-screen").value = "0";
}

function deleteLast() {
    let screen = document.getElementById("output-screen");
    screen.value = screen.value.slice(0, -1);
    if (screen.value === "") {
        screen.value = "0";
    }
}

function calculate() {
    let screen = document.getElementById("output-screen");
    try {
        screen.value = eval(screen.value.replace("×", "*").replace("÷", "/"));
    } catch (e) {
        screen.value = "Error";
    }
}
