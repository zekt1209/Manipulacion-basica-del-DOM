// Escribir HTML desde JavaScript

var img = document.createElement('img');
img.src = "https://www.bleepstatic.com/images/news/ransomware/f/fsociety/wallpaper.jpg";
// img.setAttribute('src', '(Link de la imagel)')
img.classList.add("backgroundImage");

var pid = document.getElementById('pid');
console.log(pid.childNodes);
pid.append(img);
//pid.replaceChild(img, pid.childNodes[0]);
pid.replaceWith(img);



// Events

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');
const pResultado = document.querySelector('#resultado');


// btn.addEventListener('click', btnClick);

// function btnClick() {
//     // console.log(parseInt(input1.value) + Number(input2.value));
//     let resultado = parseInt(input1.value) + Number(input2.value);
//     pResultado.innerText = resultado;
// }

    form.addEventListener('submit', sumarInputValues)

    function sumarInputValues(event) {
        console.log({event});
        event.preventDefault();
        let resultado = parseInt(input1.value) + parseInt(input2.value);
        pResultado.innerText = resultado;
    }
  
    
