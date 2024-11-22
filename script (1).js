const historyDiv = document.getElementById("history");

function clearScreen() {
    document.getElementById("result").value = "";
}
function deleteLast() {
    var input = document.getElementById("result").value;
    document.getElementById("result").value = input.substring(0, input.length - 1);
}


function insert(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var input = document.getElementById("result").value;
    try {
        const result = eval(input);
        document.getElementById("result").value = result;
        saveToHistory(input + ' = ' + result);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function saveToHistory(entry) {
    const historyEntry = document.createElement("div");
    historyEntry.textContent = entry;
    historyDiv.prepend(historyEntry);
}

function toggleTheme() {
    const body = document.body;
    const isLightTheme = body.classList.toggle('light-theme');
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});