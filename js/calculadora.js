window.addEventListener('load', ()=>{ /*escuchamos cuando se carga el documento*/
    
// creamod dos constantes y nos guardamos los elementos que necesitamos
    const display = document.querySelector ('.calculadora-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    // creamos otra constante para convertir el html collection a array
    const keypadButtonsArray = Array.from(keypadButtons);

    // iteramos por nuestro nuevo arrray de botones
    keypadButtonsArray.forEach((button)=>{

        // a cada boton le agregamos un listener
        button.addEventListener ('click',() =>{
            calculadora(button, display);
        })
    })
})

function calculadora (button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar (display);
            break;
        
        case '=':
            calcular (display);
            break;
        
        default:
            actualizar (display, button)
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*tomar el string, resolverlo y guardarlo en el innerHTML del display*/

}

function actualizar (display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML +=button.innerHTML;
}

function borrar (display){
    display.innerHTML= 0
}

