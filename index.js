document.addEventListener('DOMContentLoaded', function(){ 
    document.getElementById("btnEnviar").addEventListener("click", enviaMensagem);
    document.getElementById("fieldMsg").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            enviaMensagem();
        }
    });
}, false);


function enviaMensagem(){
    var mensagem = document.getElementById("fieldMsg").value;
    if(mensagem.trim() !== ''){
      document.getElementById("fieldMsg").value = '';
      var container = document.createElement("div");
      container.classList.add("mensagemRight");
      var toRight = document.createElement("div");
      toRight.classList.add("toRight");
      var from = document.createElement("p");
      var italico = document.createElement("i");
      from.innerHTML = "Você diz:";
      var msgContainer = document.createElement("div");  
      msgContainer.classList.add("mensagemContainer");  
      var msg = document.createElement("p");
      msg.classList.add("textoMensagem");   
      msg.innerHTML = mensagem; 
      container.appendChild(toRight);
      italico.appendChild(from);
      toRight.appendChild(italico);
      container.appendChild(msgContainer);
      msgContainer.appendChild(msg);
      document.getElementById("chatContainer").appendChild(container);
      var objDiv = document.getElementById("chatContainer");
      objDiv.scrollTop = objDiv.scrollHeight;
    }else{
        alert('Não é possivel enviar mensagem em branco!');
    }

}

