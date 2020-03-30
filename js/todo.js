let btmnAddTarefa = document.querySelector('#addTarefa');
let container = document.querySelector('main.container');
let inputTextoTarefa = document.querySelector('#textoTarefa');
let body = document.querySelector('body')

function adicionarTarefa() {
  let texto = inputTextoTarefa.value;
  
    if(texto.length > 0) {
    let card = document.createElement('div')
    card.setAttribute('class', 'card m-3')

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')    

    let btnFinalizarTarefa = document.createElement('button')
    btnFinalizarTarefa.setAttribute('class', 'btn btn-success')
    btnFinalizarTarefa.textContent = "Finalizar Tarefa"
    btnFinalizarTarefa.onclick = function(event) {
      // excluindo a tarefa após finalizar
      card.remove() 
      //let cardPai = event.target.parentNode.parentNode
      //cardPai.remove()
    }

    card.appendChild(cardBody)
    cardBody.textContent = texto;
    cardBody.appendChild(btnFinalizarTarefa)

    container.appendChild(card)

    inputTextoTarefa.value = ""
  }else {
    alert("Você deve digitar uma tarefa primeiro")
  }  
}


btmnAddTarefa.onclick = adicionarTarefa;

inputTextoTarefa.onkeypress = function(event) {
  if(event.key == 'Enter') {
    adicionarTarefa()
  }
}

//btmnAddTarefa.addEventListener('click' , function(){
  //  alert("Adicionei tarefa!")
//})