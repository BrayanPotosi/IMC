let estatura = document.getElementById('number_cm').value;
let peso = document.getElementById('number_kg').value;

let calcular = parseInt(document.getElementById('buttonCalculate').addEventListener('click',funcalcular));

function funcalcular(){
    console.log(estatura + peso)
}