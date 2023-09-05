const div = document.getElementById('ff')

let anima = null 
let anima2 = null 
let anima3 = null 
let telaMax
let pos = 0


const init=()=>{
    div.style="position:relative;left:0px"

    telaMax=window.innerWidth
    console.log(telaMax)
    anima=setInterval(move,10,2)
   
   
}
const move=(dir)=>{
if(pos <= telaMax){
    pos=parseInt(div.style.left)
    pos+=1*dir
    //console.log(`valor do pos: ${pos}`)
    div.style=`position:relative;left:${pos}px`
}else{
    pos = -600
    div.style=`position:relative;left:${pos}px`
 }
 

}

window.onload=init