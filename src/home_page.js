
function mamaImage(){
    const mamaImg = document.createElement('div');
    mamaImg.classList.add('img_container');
    const topImg = document.createElement('img');
    topImg.classList.add('top_img');
    topImg.src = 'imgs/clipart/clipart847140.png'
    const bottomImg = document.createElement('img');
    bottomImg.classList.add('bottom_img');
    bottomImg.src = 'imgs/clipart/1887846.png'
    mamaImg.appendChild(bottomImg);
    mamaImg.appendChild(topImg);
    return mamaImg
}

function Welcome(){
    const welcomeBox = document.createElement('div');
    const welcomeText = document.createElement('p');
    welcomeBox.classList.add('home_text');
    welcomeBox.classList.add('welcome');
    welcomeText.textContent = 'Welcome to Cooking Mama!';
    welcomeBox.appendChild(welcomeText);
    return welcomeBox
}

function Slogan(){
    const sloganBox = document.createElement('div');
    const aboutText = document.createElement('p');
    sloganBox.classList.add('home_text');
    sloganBox.classList.add('slogan')
    aboutText.textContent = "There's room for improvement to be even better than Mama!";
    sloganBox.appendChild(aboutText);
    return sloganBox
}

function loadHome(){
    const homePage = document.querySelector('#main');
    homePage.classList.add('home_page')
    homePage.textContent = ''
    homePage.appendChild(Welcome())
    homePage.appendChild(mamaImage())
    homePage.appendChild(Slogan())
    return homePage
}

export default loadHome;