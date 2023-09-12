let projetos = document.getElementById('blocoProjeto')
let campoProjeto = document.createElement('div')

let divTextos = document.createElement('div')
divTextos.setAttribute('class', 'textos')

let divADD = document.createElement('div')
divADD.setAttribute('class', 'adicionais')

let divTitulos = document.createElement('div')
divTitulos.setAttribute('class', 'titulos')

let elementoTitulo = document.createElement('h2');//criando um elemento 

let elementoDivisao = document.createElement('hr')
elementoDivisao.color = '#023554'
elementoDivisao.style.margin = '2%'
elementoDivisao.style.marginTop = '0%'
elementoDivisao.style.opacity = "20%"

let links1 = document.createElement('a')
links1.setAttribute('class', 'linkss')
let links2 = document.createElement('a')
links2.setAttribute('class', 'linkss')
let links3 = document.createElement('a')
links3.setAttribute('class', 'linkss')

let texto = document.createElement('p')

let imgPorjetos1 = document.createElement('img')
imgPorjetos1.setAttribute('class', 'imgPorjetos')
let img2 = document.createElement('img')
img2.setAttribute('class', 'imgPorjetos')
let img3 = document.createElement('img')
img3.setAttribute('class', 'imgPorjetos')


let lista = document.createElement('ul')
lista.setAttribute('class', 'listas')
let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')

function criar(idProjeto){
    switch (idProjeto) {
    case 1:
        try {
            removerTela()
            projeto1()
       } catch (error) {
           projeto1()
       }
      break;
    case 2:
        try {
            removerTela()
            projeto2()
       } catch (error) {
           projeto2()
       }
     break;
     case 3:
        try {
            removerTela()
            projeto3()
       } catch (error) {
           projeto3()
       }
     break;
    default: 
  }
}
function projeto1(){
    //area para criar os itens

    elementoTitulo.innerText = 'Introdução ao microcontrolador PIC'
    divTitulos.appendChild(elementoTitulo)

    texto.innerHTML = `Graças ao Eletrogater Expert, um sistema disponibilizado pela Loja Eletrogate pude desenvolver e disponibilizar esse projeto de 3 etapas no blog da Loja, <br> nele podemos encontrar um passo a passo para compreender o microcontrolador PIC e ainda  desenvolver o primeiro projeto. Esse artigo foi dividido em 3 partes para melhor compreenção. Link para eles são:` 
    divTextos.appendChild(texto)

    imgPorjetos1.setAttribute('src', 'fotos/pic.webp')
    divADD.appendChild(imgPorjetos1)

    links1.innerText = 'click aqui para acessar o artigo 1.......... '
    links1.setAttribute('href', 'https://blog.eletrogate.com/introducao-aos-microcontroladores-pic-parte-1/')

    links2.innerText = 'click aqui para acessar o artigo 2.......... '
    links2.setAttribute('href', 'https://blog.eletrogate.com/introducao-aos-microcontroladores-pic-parte-1/')

    links3.innerText = 'click aqui para acessar o artigo 3.......... '
    links3.setAttribute('href', 'https://blog.eletrogate.com/como-gravar-codigo-no-pic-parte-3/')
/* 
    divADD.appendChild(links1)
    divADD.appendChild(links2)
    divADD.appendChild(links3) */

    list1.appendChild(links1)
    list2.appendChild(links2)
    list3.appendChild(links3)
   
    lista.appendChild(list1)
    lista.appendChild(list2)
    lista.appendChild(list3)
    divADD.appendChild(lista)


    //area para adicionar a div dentro da pagina (body)
    campoProjeto.appendChild(divTitulos) 
    campoProjeto.appendChild(elementoDivisao)
    campoProjeto.appendChild(divTextos)
    campoProjeto.appendChild(divADD)
    projetos.appendChild(campoProjeto)
}


function projeto2(){
    elementoTitulo.innerText = 'Em Desenvolvimento'
    divTitulos.appendChild(elementoTitulo)

    texto.innerText = `lore lorem lorem lre lore lorem lorem lre lore lorem lorem lre lore lorem lorem lre` 
    divTextos.appendChild(texto)

    //area para adicionar a div dentro da pagina (body)
    campoProjeto.appendChild(divTitulos) 
    campoProjeto.appendChild(elementoDivisao)
    campoProjeto.appendChild(divTextos)
    projetos.appendChild(campoProjeto)
}
function projeto3(){
    elementoTitulo.innerText = 'Projeto javascript start '
    divTitulos.appendChild(elementoTitulo)

    texto.innerText = `Aqui podemos encontrar 5 projetos intermediario que irar ajudar voce treinar e praticar javascript` 
    divTextos.appendChild(texto)

    //area para adicionar a div dentro da pagina (body)
    campoProjeto.appendChild(divTitulos) 
    campoProjeto.appendChild(elementoDivisao)
    campoProjeto.appendChild(divTextos)
    projetos.appendChild(campoProjeto)
}
function removerTela(){
    projetos.removeChild(campoProjeto)
    campoProjeto.removeChild(divADD)

}



/* const ferramentas = document.getElementById('ff')
let larguraMaxima = window.innerWidth
let intervalo

console.log('teste')

const init = () => {
    ferramentas.forEach(ferramenta => {
        ferramentas.style.left = -`${ferramentas.offseWidth}`
    })
    window.addEventListener('resize', () => {
        larguraMaxima = window.innerWidth
    })
    intervalo = setInterval(move,10)
}
const move = () => {
    ferramentas.forEach(ferramenta => {
        let pos = parseInt(projeto.style.left) || 0
        pos += 1
        if(pos >= larguraMaxima){
            pos = -920
        }
        ferramentas.style.left = `${pos}px`
    })
}
    window.onload=init 

 */