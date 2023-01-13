import loadHome from "./home_page";
import loadMenu from "./menu";
import loadContact from "./contact";

function createTitle(){
    const title = document.createElement('div');
    const titleImg = document.createElement('img');
    titleImg.src = '../imgs/restaurant_logo.png'
    title.appendChild(titleImg)
    title.classList.add('title')
    return title
}

function activateBtn(evt){
    if(evt.target.classList.contains("heading_btn")){
        operatorBtn.forEach((button) => {
            button.classList.remove("active");
});
    evt.target.classList.add("active");
}
}

function homeBtn(){
    const homeButton = document.createElement('button');
    homeBtn.classList.add('heading_btn');
    homeBtn.textContent = 'Home'
    homeButton.addEventListener('click', () => {
        activateBtn()
        loadHome()
    })
    return homeButton
}
function menuBtn(){
    const menuButton = document.createElement('button');
    menuBtn.classList.add('heading_btn');
    menuBtn.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        activateBtn()
        loadMenu()
    })
    return menuButton
}

function contactBtn(){
    const contactButton = document.createElement('button');
    contactBtn.classList.add('heading_btn');
    contactBtn.textContent = 'Contact'
    contactButton.addEventListener('click', () => {
        activateBtn()
        loadContact()
    })
    return contactButton
}

function createNav(){
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.appendChild(homeBtn());
    nav.appendChild(menuBtn());
    nav.appendChild(contactBtn());
    return nav
}

function createHeader(){
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    header.appendChild(createTitle());
    header.appendChild(createNav());
    return header
}

function createMain(){
    const main = document.createElement('div');
    main.setAttribute("id", "main");
    return main
}


function createPage(){
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    return content
}

export default createPage
