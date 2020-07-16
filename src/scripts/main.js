const calc = parseInt(document.querySelector('#buttonCalculate').addEventListener('click',funcalculate));
//               <>
function funcalculate(){
    let result_text = ''
    const height  = parseFloat(document.querySelector('#number_m').value);
    const weight = parseFloat(document.querySelector('#number_kg').value);
    const result =  (weight/(Math.pow(height , 2))).toFixed(1);
    const finalText = document.querySelector("#final_text")

    if(result <18.5){
        result_text = `Su IMC es de ${result}, esto quiere decir que tienes un peso bajo`
    }
    else if(result >=18.5 && result <= 24.9){
        result_text = `Su IMC es de ${result}, esto quiere decir que tienes un peso normal`
    }
    else if(result >=25 && result <= 25.9){
        result_text = `Su IMC es de ${result}, esto quiere decir que tienes sobrepeso`
    }
    else if(result >= 30){
        result_text = `Su IMC es de ${result}, esto quiere decir que estas obeso`
    }
    console.log(result_text)
    finalText.innerHTML = result_text
    
}