const estatura = parseInt(document.querySelector('#number_cm').value);
const peso = parseInt(document.querySelector('#number_kg').value);

const calcular = document.querySelector('#buttonCalculate').addEventListener('click',funcalcular);

function funcalcular(){
    console.log(estatura)
    console.log(peso)
}