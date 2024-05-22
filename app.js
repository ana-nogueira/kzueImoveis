const btns = document.querySelectorAll ('.plantas-tab');
const plantasImg = document.querySelector ('.plantas-img img')
const plantasDetails = document.querySelectorAll ('.plantas-details')

console.log (plantasImg.getAttribute('src'))

btns.forEach ((btn) => {
    
    btn.addEventListener ('click', handleBtnClick);
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