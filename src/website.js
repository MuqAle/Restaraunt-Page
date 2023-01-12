function createTitle(){
    const title = document.createElement('div');
    const titleImg = document.createElement('img');
    titleImg.src = '../imgs/restaurant_logo.png'
    title.appendChild(titleImg)
    title.classList.add('title')
    return title
}

function homeBtn(){
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('heading_btn');
    homeBtn.textContent = 'Home'
    return homeBtn
}
function menuBtn(){
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('heading_btn');
    menuBtn.textContent = 'Menu'
    return menuBtn
}

function contactBtn(){
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('heading_btn');
    contactBtn.textContent = 'Contact'
    return contactBtn
}

function createNav(){
    const nav = document.createElement('div');
    nav.classList.add('nav')
    nav.appendChild(homeBtn());
    nav.appendChild(menuBtn());
    nav.appendChild(contactBtn());
    return nav
}

function createHeader(){
    const header = document.createElement('div');
    header.appendChild(createTitle());
    header.appendChild(createNav());
    return header
}