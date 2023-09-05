let projetos = document.getElementById('blocoProjeto')
let campoProjeto

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
     case 3: console.log('deu certo o switch')
    default: 
  }
}
function projeto1(){
    //area para criar os itens
    campoProjeto = document.createElement('div')
    let elementoTitulo = document.createElement('h2');//criando um elemento 
    let elementoDivisao = document.createElement('hr')
    let links1 = document.createElement('a')
    let links2 = document.createElement('a')
    let links3 = document.createElement('a')
    let texto = document.createElement('p')

    //area para manipular os itens (adicionar texto, class, atributos e etc)
    campoProjeto.setAttribute("class", "exibirProjeto")
    links1.setAttribute('href','https://blog.eletrogate.com/introducao-aos-microcontroladores-pic-parte-1/') 
    links1.innerHTML='Artigo 1'
    texto.innerHTML = `Graças ao Eletrogater Expert, um sistema disponibilizado pela Loja Eletrogate pude desenvolver e disponibilizar esse projeto de 3 etapas no blog da Loja, nele podemos encontrar um passo a passo para compreender o microcontrolador PIC e ainda  desenvolver o primeiro projeto. Esse artigo foi dividido em 3 partes para melhor compreenção. Link para eles são: ${links1}` 
    elementoDivisao.color = 'blueviolet'
    elementoTitulo.innerHTML = 'Projeto 1 com sucesso' //atribuindo informaçoes para dentro do elemento 

    //Area para adicionar os itens dentro da DIV
    //A ordem que os itens são adicionado importa, portanto se adicionar o texto antes do titulo, o titulo fica embaixo
    campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
    campoProjeto.appendChild(elementoDivisao)
    campoProjeto.appendChild(texto)
    campoProjeto.appendChild(links1)

    //area para adicionar a div dentro da pagina (body)
    projetos.appendChild(campoProjeto) 
}
function projeto2(){
    campoProjeto = document.createElement('div')
    let elementoTitulo = document.createElement('h2');//criando um elemento 
    elementoTitulo.innerHTML = 'Projeto 2 com sucesso' //atribuindo informaçoes para dentro do elemento 
    campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
    projetos.appendChild(campoProjeto)
}
function removerTela(){
    projetos.removeChild(campoProjeto)
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