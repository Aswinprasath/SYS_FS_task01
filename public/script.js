

const labelone = document.getElementById("header-lab2");

labelone.addEventListener("mouseover" , () => {
    labelone.innerText = "Explore ▲ ";
});

labelone.addEventListener("mouseout" , () => {
    labelone.innerText = "Explore ▼ ";
});