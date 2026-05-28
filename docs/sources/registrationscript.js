const signupbox =
    document.getElementById('maincon-box1');



const loginbox =
    document.getElementById('maincon-box2');




const params =
    new URLSearchParams(window.location.search);



const formType =
    params.get('form');



if (formType === "signup") {

    signupbox.style.display = "block";

    loginbox.style.display = "none";

}



else if (formType === "login") {

    signupbox.style.display = "none";

    loginbox.style.display = "block";

}


function tryonetie() {
    alert("Great")
}

// const gobackhome = document.getElementById('submit-btn');

// gobackhome.addEventListener('click' , () => {
//     window.location.href = "../index.html";
// })

function gobackhome() {
    window.location.href = "../index.html";
}