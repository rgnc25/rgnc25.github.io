function armazenarValor() {

    var userInput = document.getElementById("userInput").value

    if (userInput > 0) {
        document.getElementById("valorInserido").innerText = "O valor inserido (" + userInput + ") é positivo";
    }
    else if (userInput < 0) {
        document.getElementById("valorInserido").innerText = "O valor inserido (" + userInput + ") é negativo";
    }
    else {
        document.getElementById("valorInserido").innerText = "O valor inserido (" + userInput + ") é nulo";
    }
}