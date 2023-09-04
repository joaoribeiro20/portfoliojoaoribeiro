let projeto1 = document.getElementById('projeto1')
let projeto2 = document.getElementById('projeto2')
let projeto3 = document.getElementById('projeto3')
let texto1 = document.getElementById('texto')
/*let projeto1 = document.getElementById()
let projeto1 = document.getElementById() */

let anima = null
let telaMax

const init = () => {

  projeto1.style = "position:relative;left:0px"

  projeto2.style = "position:relative;left:0px"

  projeto3.style = "position:relative;left:0px"
  telaMax = window.innerWidth
  //console.log(telaMax)
  anima = setInterval(move, 10, 1)

}

const move = (dir) => {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  if (pos1 == 0) {
    pos1 = parseInt(projeto1.style.left)
    pos2 = parseInt(projeto2.style.left)
    pos3 = parseInt(projeto3.style.left)

    //console.log(pos3)
    pos1 += 1 * dir
    pos2 += 1 * dir
    pos3 += 1 * dir
    projeto1.style = `position:relative;left:${pos1}px`
    projeto2.style = `position:relative;left:${pos2}px`
    projeto3.style = `position:relative;left:${pos3}px`


    //console.log(pos1)
    //console.log(pos2)
    //console.log(pos3) 
    let tela1 = telaMax
    console.log(telaMax)
    console.log(tela1)
    if (pos3 > tela1 - 100) {
      projeto3.style = `position:relative;left:${-1320}px`
    }
    if (pos2 > tela1) {
      projeto2.style = `position:relative;left:${-1320}px`

    }
    if (pos1 >= tela1) {

      projeto1.style = `position:relative;left:${-1320}px`


    }

  }


  projeto1.addEventListener('click', entrar)
  function entrar() {
    projeto1.style.width = '450px'
    projeto1.style.height = '260px'
    texto1.style.display = 'block'
    projeto1.style.backgroundColor = '#023554'
    projeto1.style.color = '#DECBB0'
    projeto1.style.border = '30%'
    clearInterval(anima)

  }
  projeto1.addEventListener('mouseout', sair)
  function sair() {
    clearInterval(anima)
    texto1.style.display = 'none'
    anima = setInterval(move, 10, 1)
  }

}
window.onload = init