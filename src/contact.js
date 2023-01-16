function createTitle(){
    const title = document.createElement('div');
    const titleImg = document.createElement('img');
    title.classList.add('contact_container')
    titleImg.classList.add('contact_title');
    titleImg.src = 'imgs/heading/contact_us_title.png'
    title.appendChild(titleImg);
    return title
}

function Address(){
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address_container');
    const addressTitle = document.createElement('div');
    addressTitle.classList.add('address_title');
    const address = document.createElement('p');
    const map = document.createElement('iframe');
    map.classList.add('map')
    map.src ="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d405.7921723239679!2d139.51649005597645!3d35.54536908410701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuzuki-2nd%20Bldg.3F%2C2-10-16%2C%20Aobadai%2CAoba-ku%2CYokohama-shi%2C%20Kanagawa-ken%2C227-0062%2C%20JAPAN!5e0!3m2!1sen!2sus!4v1673633295395!5m2!1sen!2sus" 
    addressTitle.textContent = 'Address'
    address.textContent = "Suzuki-2nd Bldg.3F,2-10-16,\r\n"
    address.textContent += "Aobadai,Aoba-ku,Yokohama-shi,\r\n"
    address.textContent += "Kanagawa-ken,227-0062,\r\n"
    address.textContent += "JAPAN"
    addressContainer.appendChild(addressTitle);
    addressContainer.appendChild(address);
    addressContainer.appendChild(map);
    return addressContainer
}

function loadContact(){
    const contactPage = document.querySelector('#main');
    contactPage.classList.add('contact_page')
    contactPage.textContent = ''
    contactPage.appendChild(createTitle());
    contactPage.appendChild(Address())
    return contactPage
}

export default loadContact;