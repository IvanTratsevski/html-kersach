// console.log('Ура! Заработало...');
let burger = document.querySelector('.icon');
let menuBody = document.querySelector('.menu');

if (burger){
    burger.addEventListener("click", function(e){
        burger.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}