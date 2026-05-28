

const labelone = document.getElementById("header-lab2");

labelone.addEventListener("mouseover", () => {
    labelone.innerText = "Explore ▲ ";
});

labelone.addEventListener("mouseout", () => {
    labelone.innerText = "Explore ▼ ";
});


// const showfea = () => {
//     document.getElementById("fea-elements").style.display= "block";
// }

const elementsfea = document.getElementById("fea-elements");

const headerlab1 = document.getElementById("header-lab1");

headerlab1.addEventListener('click', () => {
    // elementsfea.style.display = "block";
    if (elementsfea.style.display === "none") {
        elementsfea.style.display = "block";
    }
    else {
        elementsfea.style.display = "none";
    }
});

const vediotop = document.getElementById("video-box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            vediotop.play();
        }
        else {
            vediotop.pause();
        }
    });
});

observer.observe(vediotop)

const slidevideos = [

    'assets/slidevideos/videoone.mp4',

    'assets/slidevideos/videotwo.mp4',

    'assets/slidevideos/videothree.mp4'

];



const firstvideo = 0;

const lastvideo = slidevideos.length - 1;

let currentvideo = 0;



const nexvideobtnc2 =
    document.getElementById('nexvideobtnc2');



nexvideobtnc2.addEventListener('click', () => {

    const videoTag =
        document.getElementById('video-box');



    currentvideo++;



    if (currentvideo > lastvideo) {

        currentvideo = 0;

    }



    videoTag.src = slidevideos[currentvideo];



    videoTag.load();

    videoTag.play();

});



const prevideobtnc2 =
    document.getElementById('prevideobtnc2');



prevideobtnc2.addEventListener('click', () => {

    const videoTag =
        document.getElementById('video-box');



    currentvideo--;



    if (currentvideo < firstvideo) {

        currentvideo = lastvideo;

    }



    videoTag.src = slidevideos[currentvideo];



    videoTag.load();

    videoTag.play();

});

// const signupbtn = document.getElementById('SignUpPg');
// const loginbtn = document.getElementById('LoginPg');
// const signupbox = document.getElementById('maincon-box1');
// const loginbox = document.getElementById('maincon-box2');

// signupbtn.addEventListener('click' , () => {
//     window.location.href = "sources/loginsignup.html";
//     signupbox.style.display = "block";
//     loginbox.style.display = "none";
// });

// loginbtn.addEventListener('click' , () => {
//     window.location.href = "sources/loginsignup.html";
//     signupbox.style.display = "none";
//     loginbox.style.display = "block";
// });

// const changetologin = document.getElementById('subheading2-registration');
// const changetosignup = document.getElementById('subheading3-registration');

// changetologin.addEventListener('click' , () => {
//     signupbox.style.display = 'none';
//     loginbox.style.display = 'block';
// });

// changetosignup.addEventListener('click' , () => {
//     signupbox.style.display = 'block';
//     loginbox.style.display = 'none';
// });

/* =========================
   INDEX PAGE BUTTONS
========================= */

const signupbtn =
    document.getElementById('SignUpPg');




signupbtn.addEventListener('click', () => {

    window.location.href =
        "sources/loginsignup.html?form=signup";

});




const loginbtn =
    document.getElementById('LoginPg');



if (loginbtn) {

    loginbtn.addEventListener('click', () => {

        window.location.href =
            "sources/loginsignup.html?form=login";

    });

}
