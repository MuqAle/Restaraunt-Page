function createTitle(){
    const title = document.createElement('div');
    const titleImg = document.createElement('img');
    titleImg.classList.add('menu_title');
    title.appendChild(titleImg);
    return title
}

function createFoodItem(foodname,src){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu_item')
    const foodImg = document.createElement('img');
    foodImg.classList.add('food_img');
    foodImg.src = src
    const foodName = document.createElement('div');
    foodName.classList.add('food_name');
    foodName.textContent = foodname
    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    return menuItem
}

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu')
    menu.appendChild(createFoodItem('Beef Steak', '../imgs/beef_steak.webp'));
    menu.appendChild(createFoodItem('Chicken Kebab', '../imgs/chicken_kebabs.webp'));
    menu.appendChild(createFoodItem('Pizza','../imgs/pizza.webp'));
    menu.appendChild(createFoodItem('Shrimp Tempura','../imgs/shrimp_tempura.webp'));
    menu.appendChild(createFoodItem('Spaghetti Neapolitan','../imgs/spaghetti_neapolitan.webp'));
    menu.appendChild(createFoodItem('Udon','../imgs/udon.webp'));
    return menu
}

function loadMenu(){
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu_page');
    menuPage.appendChild(createTitle());
    menuPage.appendChild(createMenu());
    return menuPage
}

export default loadMenu;