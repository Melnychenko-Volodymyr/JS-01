
let div = document.querySelector('.class1');

function textChange1() {
    div.innerHTML= 'Тепер забери мишу';
    div.style.backgroundColor = "yellow";
}

function textChange2() {
    div.innerHTML= 'Наведи на мене мишкою';
    div.style.backgroundColor = "aqua";
}

div.addEventListener('mouseover', textChange1);
div.addEventListener('mouseout', textChange2);



