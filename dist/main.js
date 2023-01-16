/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTitle(){\n    const title = document.createElement('div');\n    const titleImg = document.createElement('img');\n    title.classList.add('contact_container')\n    titleImg.classList.add('contact_title');\n    titleImg.src = '../dist/imgs/heading/contact_us_title.png'\n    title.appendChild(titleImg);\n    return title\n}\n\nfunction Address(){\n    const addressContainer = document.createElement('div');\n    addressContainer.classList.add('address_container');\n    const addressTitle = document.createElement('div');\n    addressTitle.classList.add('address_title');\n    const address = document.createElement('p');\n    const map = document.createElement('iframe');\n    map.classList.add('map')\n    map.src =\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d405.7921723239679!2d139.51649005597645!3d35.54536908410701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuzuki-2nd%20Bldg.3F%2C2-10-16%2C%20Aobadai%2CAoba-ku%2CYokohama-shi%2C%20Kanagawa-ken%2C227-0062%2C%20JAPAN!5e0!3m2!1sen!2sus!4v1673633295395!5m2!1sen!2sus\" \n    addressTitle.textContent = 'Address'\n    address.textContent = \"Suzuki-2nd Bldg.3F,2-10-16,\\r\\n\"\n    address.textContent += \"Aobadai,Aoba-ku,Yokohama-shi,\\r\\n\"\n    address.textContent += \"Kanagawa-ken,227-0062,\\r\\n\"\n    address.textContent += \"JAPAN\"\n    addressContainer.appendChild(addressTitle);\n    addressContainer.appendChild(address);\n    addressContainer.appendChild(map);\n    return addressContainer\n}\n\nfunction loadContact(){\n    const contactPage = document.querySelector('#main');\n    contactPage.classList.add('contact_page')\n    contactPage.textContent = ''\n    contactPage.appendChild(createTitle());\n    contactPage.appendChild(Address())\n    return contactPage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaraunt-page/./src/contact.js?");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction mamaImage(){\n    const mamaImg = document.createElement('div');\n    mamaImg.classList.add('img_container');\n    const topImg = document.createElement('img');\n    topImg.classList.add('top_img');\n    topImg.src = '../dist/imgs/clipart/clipart847140.png'\n    const bottomImg = document.createElement('img');\n    bottomImg.classList.add('bottom_img');\n    bottomImg.src = '../dist/imgs/clipart/1887846.png'\n    mamaImg.appendChild(bottomImg);\n    mamaImg.appendChild(topImg);\n    return mamaImg\n}\n\nfunction Welcome(){\n    const welcomeBox = document.createElement('div');\n    const welcomeText = document.createElement('p');\n    welcomeBox.classList.add('home_text');\n    welcomeBox.classList.add('welcome');\n    welcomeText.textContent = 'Welcome to Cooking Mama!';\n    welcomeBox.appendChild(welcomeText);\n    return welcomeBox\n}\n\nfunction Slogan(){\n    const sloganBox = document.createElement('div');\n    const aboutText = document.createElement('p');\n    sloganBox.classList.add('home_text');\n    sloganBox.classList.add('slogan')\n    aboutText.textContent = \"There's room for improvement to be even better than Mama!\";\n    sloganBox.appendChild(aboutText);\n    return sloganBox\n}\n\nfunction loadHome(){\n    const homePage = document.querySelector('#main');\n    homePage.classList.add('home_page')\n    homePage.textContent = ''\n    homePage.appendChild(Welcome())\n    homePage.appendChild(mamaImage())\n    homePage.appendChild(Slogan())\n    return homePage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaraunt-page/./src/home_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaraunt-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTitle(){\n    const title = document.createElement('div');\n    title.classList.add('menu_container')\n    const titleImg = document.createElement('img');\n    titleImg.src = '../dist/imgs/heading/menu_title.png'\n    titleImg.classList.add('menu_title');\n    title.appendChild(titleImg);\n    return title\n}\n\nfunction createFoodItem(foodname,src){\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu_item')\n    const foodImg = document.createElement('img');\n    foodImg.classList.add('food_img');\n    foodImg.src = src\n    const foodName = document.createElement('div');\n    foodName.classList.add('food_name');\n    foodName.textContent = foodname\n    menuItem.appendChild(foodImg);\n    menuItem.appendChild(foodName);\n    return menuItem\n}\n\nfunction createMenu(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu_list')\n    menu.appendChild(createFoodItem('Beef Steak', '../dist/imgs/food_img/beef_steak.webp'));\n    menu.appendChild(createFoodItem('Chicken Kebab', '../dist/imgs/food_img/chicken_kebabs.webp'));\n    menu.appendChild(createFoodItem('Pizza','../dist/imgs/food_img/pizza.webp'));\n    menu.appendChild(createFoodItem('Shrimp Tempura','../dist/imgs/food_img/shrimp_tempura.webp'));\n    menu.appendChild(createFoodItem('Spaghetti Neapolitan','../dist/imgs/food_img/spaghetti_neapolitan.webp'));\n    menu.appendChild(createFoodItem('Udon','../dist/imgs/food_img/udon.webp'));\n    return menu\n}\n\nfunction loadMenu(){\n    const menuPage = document.querySelector('#main');\n    menuPage.classList.add('menu_page')\n    menuPage.textContent = ''\n    menuPage.appendChild(createTitle());\n    menuPage.appendChild(createMenu());\n    return menuPage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaraunt-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ \"./src/home_page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createTitle(){\n    const title = document.createElement('div');\n    const titleImg = document.createElement('img');\n    titleImg.src = '../dist/imgs/heading/restaurant_logo.png'\n    title.appendChild(titleImg)\n    title.classList.add('title')\n    return title\n}\n\nfunction removeClass(){\n    const main = document.querySelector('#main');\n    main.classList = ''\n    return main\n}\n\n\n\nfunction homeBtn(){\n    const wrapper = document.createElement('div');\n    const homeButton = document.createElement('button');\n    wrapper.append(homeButton);\n    wrapper.classList.add('wrapper');\n    wrapper.classList.add('home_btn');\n    homeButton.classList.add('heading_btn');\n    homeButton.classList.add('active');\n    homeButton.textContent = 'Home'\n    homeButton.addEventListener('click', (e) => {\n        const headBtn = document.querySelectorAll('.heading_btn')\n        if(e.target.classList.contains(\"heading_btn\")){\n            removeClass()\n            headBtn.forEach((button) => {\n                button.classList.remove(\"active\");\n    });\n        e.target.classList.add(\"active\");\n        (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    }\n        \n    })\n    return wrapper\n}\nfunction menuBtn(){\n    const wrapper = document.createElement('div');\n    const menuButton = document.createElement('button');\n    wrapper.append(menuButton);\n    wrapper.classList.add('wrapper');\n    wrapper.classList.add('menu_btn');\n    menuButton.classList.add('heading_btn');\n    menuButton.textContent = 'Menu';\n    menuButton.addEventListener('click', (e) => {\n        const headBtn = document.querySelectorAll('.heading_btn')\n        if(e.target.classList.contains(\"heading_btn\")){\n            removeClass()\n            headBtn.forEach((button) => {\n                button.classList.remove(\"active\");\n    });\n        e.target.classList.add(\"active\");\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    }\n        \n    })\n    return wrapper\n}\n\nfunction contactBtn(){\n    const wrapper = document.createElement('div');\n    const contactButton = document.createElement('button');\n    wrapper.append(contactButton);\n    wrapper.classList.add('wrapper');\n    wrapper.classList.add('contact_btn');\n    contactButton.classList.add('heading_btn');\n    contactButton.textContent = 'Contact'\n    contactButton.addEventListener('click', (e) => {\n        const headBtn = document.querySelectorAll('.heading_btn')\n        if(e.target.classList.contains(\"heading_btn\")){\n            removeClass()\n            headBtn.forEach((button) => {\n                button.classList.remove(\"active\");\n    });\n        e.target.classList.add(\"active\");\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    }\n        \n    })\n    return wrapper\n}\n\n\n\nfunction createNav(){\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n    nav.appendChild(homeBtn());\n    nav.appendChild(menuBtn());\n    nav.appendChild(contactBtn());\n    return nav\n}\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.setAttribute(\"id\", \"header\");\n    header.appendChild(createTitle());\n    header.appendChild(createNav());\n    return header\n}\n\nfunction createMain(){\n    const main = document.createElement('div');\n    main.setAttribute(\"id\", \"main\");\n    return main\n}\n\n\nfunction createPage(){\n    const content = document.querySelector('#content');\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    return content\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\n\n\n//# sourceURL=webpack://restaraunt-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;