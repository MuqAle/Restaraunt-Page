function createTitle(){
    const title = document.createElement('div');
    title.classList.add('title')
    return title
}

function createHome(){
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('heading_btn');
    homeBtn.textContent = 'Home'
    return homeBtn
}
function createMenu(){
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('heading_btn');
    menuBtn.textContent = 'Menu'
    return menuBtn
}

function createContact(){
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('heading_btn');
    contactBtn.textContent = 'Contact'
    return contactBtn
}

function createNav(){
    const nav = document.createElement('div');
    nav.classList.add('nav')
    nav.appendChild(createHome());
    nav.appendChild(createMenu());
    nav.appendChild(createContact());
    return nav
}

function createHeader(){
    const header = document.createElement('div');
    header.appendChild(createTitle());
    header.appendChild(createNav());
    return header
}


