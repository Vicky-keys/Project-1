const sideBar = document.getElementById("sidebar");
const menuBtn = document.getElementById("hamburger");
sideBar.style.left = "-250px";

function toggle(){
    if(sideBar.style.left == "-250px"){
        sideBar.style.left = "0";
        menuBtn.src = "images/close.png"
    } 
    else{
        sideBar.style.left = "-250px";
        menuBtn.src = "images/menu.png";   
    } 
    
}

menuBtn.addEventListener("click", toggle);


const icon = document.getElementById('icon');
const heroColor = document.querySelector('.hero-section');
const body = document.querySelector('body');
const service = document.querySelector('#services');
const subtitle = document.querySelectorAll('.subtitle');
const agentBgColor = document.querySelector('#agent');
const testimonialsBgColor = document.querySelector('#testimonials');
const activePic = document.querySelector('.active-pic');



function changeTheme(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "images/lightmode.png";
        body.style.transition = '1.5s';
        body.style.background = '#ebebeb';
        testimonialsBgColor.style.background = '#ebebeb';
        service.style.background = '#d3d3d3';
        subtitle.style.color = '#000000';
        agentBgColor.style.background = '#ebebeb';
        activePic.style.border = '#ffc107'
    } else{
        icon.src = "images/darkmode.png";
        body.style.transition = '1.5s';
        body.style.background = '#fff';
        testimonialsBgColor.style.background = '#fff';
        service.style.background = '#d3d3d3';
        subtitle.style.color = '#fff';
        agentBgColor.style.background = '#1292d5';
    }
}

    icon.addEventListener('click', changeTheme);


    let userTexts = document.getElementsByClassName('user-text');
    let userPics = document.getElementsByClassName('user-pic');

    function showReview() {
        for(userPic of userPics) {
            userPic.classList.remove('active-pic');
    }
    for(userText of userTexts) {
        userText.classList.remove('active-text');
    
        let i = Array.from(userPics).indexOf(event.target);
        userPics[i].classList.add('active-pic');
        userTexts[i].classList.add('active-text');
}
    }