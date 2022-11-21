const btnEL=
document.querySelector(".btn");
btnEL.addEventListener("mousever", (event) =>
{
    const x = event.pagex - btnEL.offsetLeft;
    const y = event.pagex - btnEL.offsetTop;

    btnEL.style.setProperty("--xPos",x+ "px");
    btnEL.style.setProperty("--yPos",y= "px");
})