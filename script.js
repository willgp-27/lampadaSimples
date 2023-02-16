
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn (){
  lamp.src = 'imagens/ybxlO.jpg'
}

function lampOff (){
  lamp.src = 'imagens/b983w.jpg'
}

function broken (){
  lamp.src = 'imagens/MRjsF.jpg'
}



turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('dblclick', broken);



