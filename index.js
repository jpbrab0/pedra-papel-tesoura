// Importando elementos do HTML
const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const score1Element = document.querySelector("#score1")
const score2Element = document.querySelector("#score2")
const resultElement = document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0
let contadorPc = 0
// Função para alterar o score
function alterarScore(){
    score1Element.innerHTML = `${contadorJogador}`
    score2Element.innerHTML = `${contadorPc}`
}
// Adicionando eventos de click
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-paper.svg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-rock.svg'
            resultElement.innerHTML = "Resultado: Você venceu!!! :D"
            contadorJogador++
            break
        case 1:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Você Perdeu... D:"
            contadorPc++
            break
    }
    alterarScore()
})

tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-scissors.svg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: Você venceu!!! :D"
            contadorJogador++
            break
        case 1:
            botElement.src = 'images/icon-rock.svg'
            resultElement.innerHTML = "Resultado: Você Perdeu... D:"
            contadorPc++
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            break
    }
    alterarScore()
})

pedraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-rock.svg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-rock.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            
            break
        case 1:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: Você Perdeu... D:"
            contadorPc++
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Você venceu!!!:D"
            contadorJogador++
            break
    
    }
    alterarScore()
})