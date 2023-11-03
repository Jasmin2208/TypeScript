const buttonElement = document.querySelector(".clickMe") as HTMLButtonElement
const bodyElemet = document.body as HTMLElement
let isWhite: boolean = false

buttonElement.addEventListener("click", () => {
    if (isWhite) {
        bodyElemet.style.backgroundColor = "white"
        bodyElemet.style.color = 'black'
    } else {
        bodyElemet.style.backgroundColor = "blue"
        bodyElemet.style.color = 'white'
    }

    isWhite = !isWhite
})