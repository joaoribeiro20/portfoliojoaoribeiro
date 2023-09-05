let area = document.getElementById('ff')
let divCentro = document.getElementById('ferramen')
let teste1
let teste2
let teste3
let pos
let telaMax
let intervalID 
let i = 0



const img = [
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
"fotos/noun-kanban-board-4759118.svg",

"fotos/noun-agile-development-4759133.svg"
]
const elementoImg = [teste1, teste2, teste3]
console.log(`tamanho da div${divCentro.style.innerWidth}`)
function init(){

elementoImg[i] = document.createElement('img')
elementoImg[i].setAttribute('src', img[i])
elementoImg[i].setAttribute('class', 'imgF')
area.appendChild(elementoImg[i])
telaMax=window.innerWidth
console.log(`tamanho da tela : ${telaMax}`)
elementoImg[i].style="position:relative;left:-400px"
if (!intervalID) {
    intervalID = setInterval(myCallback, 10, pos, elementoImg[i]);

  }
console.log(`valor de i e q quantidade de voltas ${i}`)
}
function myCallback(pos, elementoImg){
    
    pos=parseInt(elementoImg.style.left)
    pos++
    elementoImg.style=`position:relative;left:${pos}px`
    
    if(pos == telaMax - 400){ 
        clearInterval(intervalID);
        intervalID = null;
        area.removeChild(elementoImg)
        i = i + 1
        init()
    }
    
}




window.onload=init()