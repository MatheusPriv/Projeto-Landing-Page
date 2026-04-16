var setaDireita = window.document.getElementById("btn-dir")
var setaEsquerda = window.document.getElementById("btn-esq")
var cards = window.document.querySelectorAll(".card")

setaDireita.addEventListener("click", function(){
    cards[0].style.opacity = "0"

    setTimeout(function(){
        cards[0].classList.add("escondido")
        cards[2].classList.remove("escondido")
        cards[2].style.opacity = "0"

        setTimeout(function(){
            cards[2].style.opacity = "1"
        }, 50)
        setaDireita.classList.add("escondido")
        setaEsquerda.style.display = "block"
    }, 500)
})

setaEsquerda.addEventListener("click", function(){
    cards[2].style.opacity = "0"

    setTimeout(function(){
        cards[2].classList.add("escondido")
        cards[0].classList.remove("escondido")
        cards[0].style.opacity = "o"

        setTimeout(function(){
            cards[0].style.opacity = "1"
        }, 50)

        setaDireita.classList.remove("escondido")
        setaEsquerda.style.display = "none"
    }, 500)

})