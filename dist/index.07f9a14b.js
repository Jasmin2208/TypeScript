const buttonElement = document.querySelector(".clickMe");
const bodyElemet = document.body;
let isWhite = false;
buttonElement.addEventListener("click", ()=>{
    if (isWhite) {
        bodyElemet.style.backgroundColor = "white";
        bodyElemet.style.color = "black";
    } else {
        bodyElemet.style.backgroundColor = "blue";
        bodyElemet.style.color = "white";
    }
    isWhite = !isWhite;
});

//# sourceMappingURL=index.07f9a14b.js.map
