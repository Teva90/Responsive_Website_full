// sidebar
const menuItems = document.querySelectorAll('.menu-item');
// messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.getElementById('message-search');
// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }
    })
})
// messages
// search chats & filter !
const searchMessage = function(){
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);
// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', function(){
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';

    }, 2000)
})
//theme/display customization
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
// close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// fonts

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
// font adjust customization
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }else if(size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-10rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
            // change font size of the root element
    document.querySelector('html').style.fontSize = fontSize;

    })
})
// color
// remove active class from all colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
// color adjust
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        }else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        }else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        }else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        }else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--color-primary-hue', primaryHue)
    })
})
// background customization
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// change the background
const changeBG = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
}
//
Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
})
Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';
    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';
    // add active class
    Bg3.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})