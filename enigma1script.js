document.getElementById("feito-button").addEventListener("click", function() {
    const respostaTextField = document.getElementById("resposta-textfield");
    const resposta = respostaTextField.value;
    if (resposta.toLowerCase() === "muito bem") {
      window.location.href = "enigma2.html";
    } else {
      alert("Resposta errada!");
    }
  });