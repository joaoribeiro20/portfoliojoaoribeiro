let area = document.getElementById('ff')
let divCentro = document.getElementById('ferramen')
let img1
let intervalID 
let i = 0



const img = [
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",



"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",

"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg",
"fotos/noun-kanban-board-4759118.svg",
"fotos/noun-agile-development-4759133.svg",


]
const elementoImg = [img1]

let div
let opcoes = 4
let titulo
let info1
let info2









function init(){
if(opcoes <= img.length){
titulo = document.createElement('h3')
info1 = document.createElement('p')
info2 = document.createElement('p')
div = document.createElement('div')
titulos()

for(i;i<opcoes;i++){
elementoImg[i] = document.createElement('img')
elementoImg[i].setAttribute('src', img[i])
elementoImg[i].setAttribute('class', 'imgF')

div.appendChild(elementoImg[i])

}
div.appendChild(info1)
div.appendChild(info2)
area.appendChild(div)
div.style.padding = '10vh'
div.style.height = '75vh'
if (!intervalID) {
    intervalID = setInterval(myCallback, 1000);
  } 
}else{   
    console.log("acabou as imagens ")
 }
 
}

function titulos(){
    if(opcoes == 4){
        titulo.innerHTML = 'Lnguagens de prgramação'
        info1.innerHTML = `OOP(Object-Oriented Programming) - SGBD - Collections - Servlet  `
        info2.innerHTML = 'JSP - JPA - Intellij - Eclipse - Visual Studio - VS CODE '
        div.appendChild(titulo)
    }else if(opcoes == 8){
        titulo.innerHTML = 'fermeworks'
        info1.innerHTML = 'MVC - Protocolo HTTP, DNS, TCP/IP'
        info2.innerHTML = 'JUnit - .NET CORE - ASP.NET'
        
        div.appendChild(titulo)
    }
    else if(opcoes == 11){
        titulo.innerHTML = 'banco de dados'
        info1.innerHTML = 'MVC - Protocolo HTTP, DNS, TCP/IP'
        info2.innerHTML = 'JUnit - .NET CORE - ASP.NET'
        div.appendChild(titulo)
    }
    else if(opcoes == 15){
        titulo.innerHTML = 'DevOps'
        info1.innerHTML = 'MVC - Protocolo HTTP, DNS, TCP/IP'
        info2.innerHTML = 'JUnit - .NET CORE - ASP.NET'
        div.appendChild(titulo)
    }
}

function myCallback(){
    if(opcoes == img.length){
        console.log("função chamada")
        opcoes = 4
        i = 0
        area.removeChild(div)
        init()
    }else{
        console.log("função chamada")
        area.removeChild(div)
        if(opcoes == 8){
            opcoes = opcoes + 3
        }else{
            opcoes = opcoes + 4
        }
        
        
        init()
    }
    
        
}


window.onload=init()


/* function myCallback(pos, elementoImg){
    
    pos=parseInt(elementoImg.style.left)
    pos++
    elementoImg.style=`position:relative;left:${pos}%`
    
    if(pos == telaMax){ 
        clearInterval(intervalID);
        intervalID = null;
        area.removeChild(elementoImg)
        i = i + 1
        elementoImg.style=`position:relative;left:${0}%`
        init()
    }
    
} */




