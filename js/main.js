const body = document.querySelector('[data-theme]');
const toggleCheckbox = document.querySelector('[data-toggle]');

//Onload
window.onload = () => {

    //Set theme on load based on local storage
    if (localStorage.getItem('theme') === 'dark-theme'){

        setTheme('dark-theme');
        toggleCheckbox.checked = false;

    } 
    else {

        setTheme('light-theme');
        toggleCheckbox.checked = true;
    }
}

//Toggle theme with button
toggleCheckbox.addEventListener('change', e => {

    //console.log("Toggled");

    if (localStorage.getItem('theme') === 'dark-theme'){

        setTheme('light-theme');

    } 
    else {

        setTheme('dark-theme');
    }
});

//Set especific theme
function setTheme(theme) {

    localStorage.setItem('theme', theme);
    body.className = theme;

    //console.log("Set theme to: " + theme);
    //console.log("Set local storage 'theme' key to: " + localStorage.getItem('theme'));
}