

const labelone = document.getElementById("header-lab2");

labelone.addEventListener("mouseover" , () => {
    labelone.innerText = "Explore ▲ ";
});

labelone.addEventListener("mouseout" , () => {
    labelone.innerText = "Explore ▼ ";
});


// const showfea = () => {
//     document.getElementById("fea-elements").style.display= "block";
// }

const elementsfea = document.getElementById("fea-elements");

const headerlab1 = document.getElementById("header-lab1");

headerlab1.addEventListener('click' , () => {
    // elementsfea.style.display = "block";
    if( elementsfea.style.display === "none"){
        elementsfea.style.display = "block";
    }
    else{
        elementsfea.style.display = "none";
    }
});

const vediotop = document.getElementById("video-box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            vediotop.play();
        }
        else{
            vediotop.pause();
        }
    });
});

observer.observe(vediotop)