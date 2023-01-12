
function mamaImage(){
    const mamaImg = document.createElement('div');
    mamaImg.classList.add('img_container');
    const topImg = document.createElement('img');
    topImg.classList.add('top_img');
    topImg.src = '../imgs/clipart847140.png'
    const bottomImg = document.createElement('img');
    bottomImg.classList.add('bottom_img');
    bottomImg.src = '../imgs/1887846.png'
    mamaImg.appendChild(topImg);
    mamaImg.appendChild(bottomImg);
    return mamaImg
}

function aboutText(){
    const textBox = document.createElement('div');
    textBox.classList.add('home_text')
    const welcomeText = document.createElement('p');
    const aboutText = document.createElement('p');
    welcomeText.textContent = 'Welcome to Cooking Mama';
    aboutText.textContent = "There's room for improvement to even better than Mama";
    textBox.appendChild(welcomeText);
    textBox.appendChild(aboutText);
    return textBox
}

function loadHome(){
    const homePage = document.createElement('div');
    homePage.classList.add('home_page');
    homePage.appendChild(mamaImage())
    homePage.appendChild(aboutText())
    return homePage
}

export default loadHome;