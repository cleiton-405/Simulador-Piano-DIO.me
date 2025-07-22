const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = []
let audio = new Audio("assets/tunes/a.wav")

const playTune = (key) =>{ // Reproduz um áudio
    audio.src = `assets/tunes/${key}.wav` // Buscar dinamicamente pelas letras dos sons
    audio.play() // Executa

    const clickedKey = document.querySelector(`[data-key="${key}"]`) // Pegando elemento HTML, que equivale a letra

    clickedKey.classList.add("active") // Adicionando uma classe active
    setTimeout(() =>{ // Funciona com um contador que vai remover a classe durante aquele tempo
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach((key) =>{ // Percorre cada elemento do array
    key.addEventListener("click", () => playTune(key.dataset.key)) // Evento de click
    mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) =>{ 
    // Ao apertar a tecla ele captura várias informações (inclusive a letra)
    if(mapedKeys.includes(e.key)){
        // Fazendo uma verificação se a letra informada está inlcuida
        playTune(e.key) // Executa
    }
})

const handVolume = (e) => { // Função para manipular o volume
    audio.volume = e.target.value 
    // áudio recebe por parâmetro e que busca o elemento do volume
}

const showHideKeys = () => { 
    // Ao clicar no botão Teclas, vai adicionar uma classe e ao apertar de novo ele remove (função desligar e ligar)
    pianoKeys.forEach(key => key.classList.toggle("hide")) // Busca na array
}

volumeSlider.addEventListener("input", handVolume) // Excuta a const

keysCheck.addEventListener("click", showHideKeys) // Executa a const