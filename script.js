const ferramentas = document.getElementById('ff')
let larguraMaxima = window.innerWidth
let intervalo

console.log('teste')

const init = () => {
    ferramentas.forEach(ferramentas => {
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