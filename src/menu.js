function createTitle(){
    const title = document.createElement('div');
    title.classList.add('menu_container')
    const titleImg = document.createElement('img');
    titleImg.src = 'imgs/heading/menu_title.png'
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
    menu.classList.add('menu_list')
    menu.appendChild(createFoodItem('Beef Steak', 'imgs/food_img/beef_steak.webp'));
    menu.appendChild(createFoodItem('Chicken Kebab', 'imgs/food_img/chicken_kebabs.webp'));
    menu.appendChild(createFoodItem('Pizza','imgs/food_img/pizza.webp'));
    menu.appendChild(createFoodItem('Shrimp Tempura','imgs/food_img/shrimp_tempura.webp'));
    menu.appendChild(createFoodItem('Spaghetti Neapolitan','imgs/food_img/spaghetti_neapolitan.webp'));
    menu.appendChild(createFoodItem('Udon','imgs/food_img/udon.webp'));
    return menu
}

function loadMenu(){
    const menuPage = document.querySelector('#main');
    menuPage.classList.add('menu_page')
    menuPage.textContent = ''
    menuPage.appendChild(createTitle());
    menuPage.appendChild(createMenu());
    return menuPage
}

export default loadMenu;