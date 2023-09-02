let projeto1 = document.getElementById('projeto1')
let projeto2 = document.getElementById('projeto2')
let projeto3 = document.getElementById('projeto3')
let texto1 = document.getElementById('texto')
/*let projeto1 = document.getElementById()
let projeto1 = document.getElementById() */

let anima = null 
let telaMax

const init=()=>{

    projeto1.style="position:relative;left:0px"

    projeto2.style="position:relative;left:0px"
    
    projeto3.style="position:relative;left:0px"
    telaMax=window.innerWidth 
    console.log(telaMax)
    anima=setInterval(move,10,10)
   
}

  const move=(dir)=>{
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    if(pos1 == 0){
        pos1=parseInt(projeto1.style.left)
        pos2=parseInt(projeto2.style.left)
        pos3=parseInt(projeto3.style.left)
        
        //console.log(pos3)
        pos1+=1*dir
        pos2+=1*dir
        pos3+=1*dir
        projeto1.style=`position:relative;left:${pos1}px`
        projeto2.style=`position:relative;left:${pos2}px`
        projeto3.style=`position:relative;left:${pos3}px`
        
        //console.log(`pos3:${pos3}`)
        //console.log(`pos2:${pos2}`)
        if(parseInt(projeto3.style.left) >= telaMax - 400){
            projeto3.style=`position:relative;left:${0}px`
        } 
          if(pos2 >=  telaMax - 400){
           projeto2.style=`position:relative;left:${0}px`
        
        }
        if(pos1 >=  telaMax - 400){
    
        projeto1.style=`position:relative;left:${0}px`
        
       
        } 
      
        }
        
    }   
    window.onload=init