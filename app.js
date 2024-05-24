const btns = document.querySelectorAll ('.plantas-tab');
const plantasImg = document.querySelector ('.plantas-img img')
const plantasDetails = document.querySelectorAll ('.plantas-details')



console.log (plantasImg.getAttribute('src'))

btns.forEach ((btn) => {
    
    btn.addEventListener ('click', handleBtnClick);
    btn.addEventListener ('touchstart', handleBtnClick);
})

function handleBtnClick (event) {
    btns.forEach ((btn)=> {
        btn.classList.remove ('selected');
    })
    let planta = event.currentTarget.getAttribute('data-planta');
    event.currentTarget.classList.add ('selected');
    plantasImg.setAttribute('src', `./assets/img/plantas/${planta}.png`)
    showCard (planta);

}


function showCard (planta) {
    plantasDetails.forEach ((plantaDetail) => {
        plantaDetail.classList.remove ('active');
        if (plantaDetail.getAttribute('data-planta') === planta) {
            plantaDetail.classList.add ('active')
        }
    })
}



// FORMULÁRIO

const submit = document.querySelector('.forms .btn');
const contato = document.querySelector ('#contato');
const validity = document.querySelectorAll ('.validity');

let contador;

console.log (contato);


function checkIfEmpty() {
    contador = 0;
    validity.forEach ((val) => {
        if (val.classList.contains('empty')) {
            contador += 1;
        }
    })
}


submit.addEventListener ('click', () => {
    checkIfEmpty();
    if (contador <= 0) {
   document.querySelector ('.forms span').innerHTML = 'Email enviado com sucesso! Em breve um de nossos corretores entrará em contato!'
    }
})


submit.addEventListener ('touchstart', () => {
    checkIfEmpty();
    if (contador <= 0) {
   document.querySelector ('.forms span').innerHTML = 'Email enviado com sucesso! Em breve um de nossos corretores entrará em contato!'
    }
})


function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('empty');
  } else {
    target.classList.remove('empty');
  }
}
contato.addEventListener('change', handleChange);