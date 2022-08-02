const menuItems = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const themeColor = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




// ----------------Side-bar------------------
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if (item.id != 'notification') {
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none'
        }
    })
})


//heighlight the messages card
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

//  theme  display customization
//opens model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

//close model
const closeThememodel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}

themeModel.addEventListener('click', closeThememodel)
theme.addEventListener('click', openThemeModel)

// -----------------------fonts-------------------

//remove active class from span font size selector

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-right', '5.4rem');
            root.style.setProperty('--sticky-top-left', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-right', '5.4rem');
            root.style.setProperty('--sticky-top-left', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-right', '-2rem');
            root.style.setProperty('--sticky-top-left', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-right', '-5rem');
            root.style.setProperty('--sticky-top-left', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-right', '-12rem');
            root.style.setProperty('--sticky-top-left', '-35rem');
        }
        //change the font size of the root html
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//Change the primary color

//remove thw active class from color
const changeActiveColorClass = () =>{
    themeColor.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


themeColor.forEach(color =>{
    color.addEventListener('click',() => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})

// -----------------------BackGround value -----------------

let lightColorLightness;
let whitColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness',whitColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}


Bg1.addEventListener('click',()=>{

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
});

Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whitColorLightness='20%';
    lightColorLightness='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whitColorLightness='10%';
    lightColorLightness='0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

