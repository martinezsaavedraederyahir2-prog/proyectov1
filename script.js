function crearCorazon(){

    const corazon = document.createElement("img");
    corazon.src = "img/corazon.png";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";
    corazon.style.width = (Math.random() * 25 + 20) + "px";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },6000);
}

setInterval(crearCorazon,300);