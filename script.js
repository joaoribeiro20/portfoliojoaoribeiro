let projetos = document.getElementById('blocoProjeto')
let campoProjeto

function teste1(){
    try {
         removerTela()
         campoProjeto = document.createElement('div')
         //campoProjeto.setAttribute("class", "exibirProjeto")
         let elementoTitulo = document.createElement('h2');//criando um elemento 
         let elementoDivisao = document.createElement('hr')
         let texto = document.createElement('p')
         
        
         texto.innerHTML = 'lorem lorem lorem lomre lorem lorem lorem lomrem' 
         elementoDivisao.color = 'blueviolet'
         elementoTitulo.innerHTML = 'Projeto 1 com sucesso' //atribuindo informaçoes para dentro do elemento 

         campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
         campoProjeto.appendChild(elementoDivisao)
         campoProjeto.appendChild(texto)
        
         projetos.appendChild(campoProjeto) 
         
         
    } catch (error) {
        campoProjeto = document.createElement('div')
        campoProjeto.setAttribute("class", "exibirProjeto")
        let elementoTitulo = document.createElement('h2');//criando um elemento 
        let elementoDivisao = document.createElement('hr')
        let texto = document.createElement('p')
        
       
        texto.innerHTML = 'lorem lorem lorem lomre lorem lorem lorem lomrem' 
        elementoDivisao.color = 'blueviolet'
        elementoTitulo.innerHTML = 'Projeto 1 com sucesso' //atribuindo informaçoes para dentro do elemento 

        campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
        campoProjeto.appendChild(elementoDivisao)
        campoProjeto.appendChild(texto)
        
        projetos.appendChild(campoProjeto)
        
    }
}
function teste2(){
    try {
        removerTela()
        campoProjeto = document.createElement('div')
    let elementoTitulo = document.createElement('h2');//criando um elemento 
    elementoTitulo.innerHTML = 'Projeto 2 com sucesso' //atribuindo informaçoes para dentro do elemento 
    campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
    projetos.appendChild(campoProjeto)
    } catch (error) {
        
        campoProjeto = document.createElement('div')
        let elementoTitulo = document.createElement('h2');//criando um elemento 
        elementoTitulo.innerHTML = 'Projeto 2 com sucesso' //atribuindo informaçoes para dentro do elemento 
        campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
        projetos.appendChild(campoProjeto)
    }
    
}
function removerTela(){
    projetos.removeChild(campoProjeto)
}



const ferramentas = document.getElementById('ff')
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

