const calc = parseInt(document.querySelector('#buttonCalculate').addEventListener('click',funcalculate));
//               <>
function funcalculate(){
    let result_text = ''
    const height  = parseInt(document.querySelector('#number_m').value);
    const height1 = (height/100).toFixed(2)
    const weight1 = parseInt(document.querySelector('#number_kg').value);
    const result1 =  (weight1/(Math.pow(height1 , 2))).toFixed(1);
    const finalText = document.querySelector("#final_text")
    
    if(result1 <18.5){
        result_text = `Su IMC es de ${result1}, esto quiere decir que tienes un peso bajo`
    }
    else if(result1 >=18.5 && result1 <= 24.9){
        result_text = `Su IMC es de ${result1}, esto quiere decir que tienes un peso normal`
    }
    else if(result1 >=25.0 && result1 <= 29.9){
        result_text = `Su IMC es de ${result1}, esto quiere decir que tienes sobrepeso`
    }
    else if(result1 >= 30.0){
        result_text = `Su IMC es de ${result1}, esto quiere decir que estas obeso`
    }
    finalText.innerHTML = result_text
}