let estatura = parseInt(document.getElementById('number_cm').value);
let peso = parseInt(document.getElementById('number_kg').value);

let calcular = document.getElementById('buttonCalculate').addEventListener('click',funcalcular);

function funcalcular(){
    console.log(estatura + peso)
}