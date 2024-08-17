document.getElementById("feito-button").addEventListener("click", function() {
    const respostaTextField = document.getElementById("resposta-textfield");
    const resposta = respostaTextField.value;
    if (resposta.toLowerCase() === "liberdade") {
      window.location.href = "final.html";
    } else {
      alert("Resposta errada!");
    }
  });