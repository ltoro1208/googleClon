//---SHOW: PREFERENCE MENU--------------------------------------------//
var preference_button = document.querySelector('.preference-button');
var preference_menu = document.querySelector('.preference-menu');

preference_button.addEventListener('click', showPreferenceMenu);

function showPreferenceMenu(){
preference_menu.classList.toggle('inactive');
}

//---SHOW: USER MENU--------------------------------------------------//
var user_option_menu = document.querySelector('.user-option-menu');
var profile_menu_button = document.querySelector('.profile-menu-button');
var header_menu_span = document.querySelector('.header-menu .profile-menu-button')

profile_menu_button.addEventListener('click', showUserOptionMenu);

function showUserOptionMenu(){
    user_option_menu.classList.toggle('inactive');
    header_menu_span.classList.toggle('shadow');
}

//---CLOSE: USER MENU-------------------------------------------------//
var close_user_menu = document.querySelector('.close-user-menu');

close_user_menu.addEventListener('click', showUserOptionMenu);