document.getElementById("feito-button").addEventListener("click", function() {
    const respostaTextField = document.getElementById("resposta-textfield");
    const resposta = respostaTextField.value;
    if (resposta.toLowerCase() === "outra vez") {
      window.location.href = "enigma3.html";
    } else {
      const erroMessage = document.getElementById("erro-message");
      erroMessage.innerHTML = "Resposta errada, que tal tentar outra vez?";
    }
  });