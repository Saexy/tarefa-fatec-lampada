let ativada = false

const btnApagar = document.getElementById("botao-apagar")
const btnAcender = document.getElementById("botao-acender")
const imgApagar = document.getElementById("imagem-apagar")
const imgAcender = document.getElementById("imagem-acender")

const checkAtiv = () => {
    if(ativada == true){
        document.body.style.backgroundColor = "white"
        btnApagar.style.display = "block"
        btnAcender.style.display = "none"
        imgApagar.style.display = "none"
        imgAcender.style.display = "block"
    }else{
        document.body.style.backgroundColor = "darkgrey"
        btnApagar.style.display = "none"
        btnAcender.style.display = "block"
        imgApagar.style.display = "block"
        imgAcender.style.display = "none"
    }
}

checkAtiv()

btnApagar.addEventListener("click", () => {
    ativada = false
    checkAtiv()
})

btnAcender.addEventListener("click", () => {
    ativada = true
    checkAtiv()
})
