// Importando elementos do HTML
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const pedraElement = document.querySelector("button[name=pedra]")
const jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const resultElement = document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

// Adicionando eventos de click
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-paper.svg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-rock.svg'
            resultElement.innerHTML = "Resultado: Jogador venceu!!! :D"
            break
        case 1:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Bot venceu!!!:D"
            break
    }
})

tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-scissors.svg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: Jogador venceu!!!:D"
            break
        case 1:
            botElement.src = 'images/icon-rock.svg'
            resultElement.innerHTML = "Resultado: Bot venceu!!! :D"
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            break
    }
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
            resultElement.innerHTML = "Resultado: Bot venceu!!!:D"
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Jogador venceu!!!:D"
            break
    }
})