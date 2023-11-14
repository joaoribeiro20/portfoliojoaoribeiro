let projetos = document.getElementById('blocoProjeto')
let campoProjeto = document.createElement('div')
let elementoTitulo = document.createElement('h2');//criando um elemento 
let divTitulos = document.createElement('div')
divTitulos.setAttribute('class', 'titulos')

function criar(idProjeto) {
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
function projeto1() {
    //area para criar os itens

    elementoTitulo.innerHTML =
        `
    <h2>Artigos &#x1F4DC</h2>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">Durante meu curso de eletrônica, tive a oportunidade de desenvolver um material didático voltado para a introdução ao microcontrolador PIC. Sempre encontrei dificuldades em encontrar materiais de qualidade e didáticos sobre esse tema. Portanto, decidi criar meu próprio material. Em parceria com a loja Eletrogate, pude concretizar esse desejo com sucesso. 
    </p>
    <br>
    <p><strong>Introdução ao microcontrolador PIC - Parte 1 &#x1F4E0</strong></p>
   
    <hr color="#023554">
    <br>
    <p class="textoProjeto">
    A "Introdução aos Microcontroladores PIC" é um guia fundamental para iniciantes de eletrônica que desejam explorar o vasto mundo dos microcontroladores da família PIC. Este artigo oferece uma visão geral abrangente, apresentando conceitos essenciais, arquitetura e componentes-chave desses dispositivos versáteis. Com os microcontroladores PIC, você pode criar uma variedade de projetos, desde controles simples até sistemas de automação complexos. Este é o ponto de partida perfeito para quem deseja mergulhar na eletrônica, com um foco especial nos PIC, amplamente utilizados na indústria. Este artigo é uma porta de entrada para o empolgante universo da eletrônica baseada em microcontroladores PIC.
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/introducao-aos-microcontroladores-pic-parte-1/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/1-3.png"  align="center" alt="" width="700px" height="100px">
    <br>
    <br>
    <p>   <strong>Primeiros Passos com MikroC - Parte 2 &#x1F4E0</strong></p>
    <hr color="#023554">
    <br>
    <p class="textoProjeto"> 
    Neste guia introdutório, você encontrará os fundamentos essenciais para começar a escrever códigos e criar projetos com MikroC, uma linguagem de programação eficiente e amigável.

    Este artigo aborda tópicos como a configuração do ambiente de desenvolvimento, a criação de projetos e a escrita de código para microcontroladores. 
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/primeiros-passos-com-mikroc-parte-2/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/pic2-3.png"  align="center" alt=""width="700px" height="100px">
    <br>
    <br>
    <p>   <strong>Como Gravar Códigos no PIC - Parte 3  &#x1F4E0</strong></p>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">Este artigo aborda os passos fundamentais envolvidos na gravação de códigos em dispositivos PIC, permitindo que você transforme suas criações em realidade.

    Neste guia, você aprenderá sobre a escolha do gravador apropriado, a configuração do ambiente de programação e a transferência de seu código para o microcontrolador. 
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/como-gravar-codigo-no-pic-parte-3/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/3-3.png"  align="center" alt="" width="700px" height="100px">
    <br>
    <br>
    <p>   <strong>Introdução ao simulador PicSimLab</strong></p>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">
    A "Introdução ao simulador PicSimLab" é um artigo que explorar o mundo da eletrônica e programação de microcontroladores. Este simulador é uma ferramenta poderosa que permite a estudantes, entusiastas e profissionais de eletrônica experimentar e aprimorar suas habilidades no desenvolvimento de sistemas baseados em microcontroladores.
    
    Neste artigo, iremos dar os primeiros passos nessa jornada de aprendizado, descobrindo como o PicSimLab funciona, como configurá-lo e usá-lo para simular programas e circuitos que envolvem microcontroladores, vamos explorar as possibilidades que esse simulador oferece.
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/introducao-ao-simulador-picsimlab/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/picsim.png"  align="center" alt="" width="700px" height="100px">
    <br>
    `
    divTitulos.appendChild(elementoTitulo)
    campoProjeto.appendChild(divTitulos)
    projetos.appendChild(campoProjeto)



}


function projeto2() {

    elementoTitulo.innerHTML = `
    <h2>Projetos de automação residencial &#129302;</h2>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">Nesses projetos, a tecnologia é usada para controlar luzes, termostatos, sistemas de segurança, eletrodomésticos e muito mais, muitas vezes por meio de dispositivos como smartphones ou sensores. Isso significa que você pode ajustar a temperatura do ambiente, acender as luzes ou até mesmo verificar as câmeras de segurança enquanto estiver longe de casa.
    <br>
    <br>
    <p><strong>Controlando Cargas com Sensor Infravermelho</strong></p>
   
    <hr color="#023554">
    <br>
    <p class="textoProjeto">Nesse artigo exploramos uma tecnologia para o controle de dispositivos eletrônicos. O sensor infravermelho, um componente comum em muitos aparelhos, desempenha um papel fundamental na automação residencial e em sistemas de controle. <br><br>
    Neste artigo, entendemos as aplicações práticas deste sensor, examinando como ele pode ser usado para controlar cargas elétricas, como lâmpadas e aparelhos, de forma eficiente e conveniente. Descobriremos as possibilidades que essa tecnologia oferece e como ela pode tornar nossas vidas mais convenientes e eficientes. Vamos explorar o mundo da automação residencial e a maneira pela qual o sensor infravermelho pode ser uma ferramenta valiosa para simplificar tarefas cotidianas. Se você está interessado em tecnologia, automação ou eletrônica, este artigo é uma leitura imperdível.
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/controlando-cargas-com-sensor-infravermelho/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/sensorI.png"  align="center" alt="" width="700px" height="100px">
    <br>
    <br>
    <p>   <strong>Sistema De Alarme Com Sensor Magnético MC-38</strong></p>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">
    O artigo "Sistema De Alarme Com Sensor Magnético MC-38" é uma exploração de um componente eletrônico crucial usado em várias aplicações, desde segurança residencial até automação. O sensor magnético MC-38 é uma peça versátil que detecta mudanças no campo magnético, e seu funcionamento desempenha um papel vital em muitos dispositivos e sistemas. Além disso, veremos como o sensor MC-38 pode ser uma adição valiosa para a automação residencial, permitindo o controle de dispositivos com base em eventos magnéticos.
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/sistema-de-alarme-com-sensor-magnetico-mc-38/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/sensorM.png"  align="center" alt=""width="700px" height="100px">
    <br>
    <br>
    <p>   <strong>Automatização do Processo de Brassagem</strong></p>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">
   
    A automatização do processo de brassagem é uma abordagem revolucionária que está ganhando destaque na indústria de fabricação de cerveja e na comunidade de cervejeiros caseiros. A brassagem é uma etapa crítica no processo de produção de cerveja, na qual os grãos de malte são transformados em mosto, o líquido que será posteriormente fermentado para criar a cerveja. A qualidade do mosto é fundamental para o sabor e a consistência da cerveja final. <br>
    <br>
    Neste artigo, exploraremos como a automatização está sendo aplicada à brassagem para otimizar a precisão e a eficiência do processo. Com a ajuda de sistemas controlados por computador, sensores e atuadores, a brassagem pode ser monitorada e ajustada em tempo real para garantir que a temperatura, o tempo de maceração e outros parâmetros sejam mantidos dentro das faixas desejadas.
    <br>
    Para acessar ao artigo completo basta apenas clicar aqui :  <a class="linkss" href="https://blog.eletrogate.com/automatizacao-do-processo-de-brassagem/">Click aqui para acessar</a>
    </p>
    <br>
    <img src="fotos/projetos/brassagem.png"  align="center" alt="" width="700px" height="100px">
    <br>

    `
    divTitulos.appendChild(elementoTitulo)
    campoProjeto.appendChild(divTitulos)
    projetos.appendChild(campoProjeto)
}
function projeto3() {
    elementoTitulo.innerHTML = `
    <h2>Projetos start javascript com typescript</h2>
    <hr color="#023554">
    <br>
    <p class="textoProjeto">Durante meu curso de eletronica pude ter a oportunidade em desenvolver uma material didatico, voltado a introdução ao microcontrolador PIC, 
    sempre senti dificuldade de encontrar materiais bons e didatico sobre tal tema, portanto decidir desenvolver o meu prorio material.
    <br>
    <img src="fotos/projetos/todo.png"  align="center" alt="" width="250px" height="150px">
    <img src="fotos/projetos/todoList.png"  align="center" alt="" width="250px" height="150px">
    <img src="fotos/projetos/cronometro.png"  align="center" alt="" width="250px" height="150px">
    <img src="fotos/projetos/quiz.png"  align="center" alt="" width="250px" height="150px">
    `
    
    divTitulos.appendChild(elementoTitulo)
    campoProjeto.appendChild(divTitulos)
    projetos.appendChild(campoProjeto)
}
function removerTela() {

    projetos.removeChild(campoProjeto)
    campoProjeto.removeChild(divTitulos)

}