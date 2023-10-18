document.getElementById("quantidadePerguntas").addEventListener("change", criarPerguntas);

function criarPerguntas() {
    var quantidadePerguntas = parseInt(document.getElementById("quantidadePerguntas").value);
    var quantidadeAlternativas = document.querySelector('input[name="alternativas"]:checked').value;
    var perguntasContainer = document.getElementById("perguntasContainer");
    perguntasContainer.innerHTML = "";

    for (var i = 1; i <= quantidadePerguntas; i++) {
        var perguntaDiv = document.createElement("div");
        perguntaDiv.className = "pergunta";

        var titulo = document.createElement("label");
        titulo.innerHTML = "Pergunta " + i + ": ";
        perguntaDiv.appendChild(titulo);

        var perguntaInput = document.createElement("input");
        perguntaInput.type = "text";
        perguntaDiv.appendChild(perguntaInput);

        var imagemLabel = document.createElement("label");
        imagemLabel.innerHTML = "Insira uma imagem (opcional): ";
        perguntaDiv.appendChild(imagemLabel);

        var imagemInput = document.createElement("input");
        imagemInput.type = "file";
        perguntaDiv.appendChild(imagemInput);

        for (var j = 1; j <= quantidadeAlternativas; j++) {
            var alternativaLabel = document.createElement("label");
            alternativaLabel.innerHTML = "Alternativa " + j + ": ";
            perguntaDiv.appendChild(alternativaLabel);

            var alternativaInput = document.createElement("input");
            alternativaInput.type = "text";
            perguntaDiv.appendChild(alternativaInput);
        }

        perguntasContainer.appendChild(perguntaDiv);
    }
}
