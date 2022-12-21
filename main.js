var preference_button = document.querySelector('.preference-button');
var preference_menu = document.querySelector('.preference-menu');

preference_button.addEventListener('click', showPreferenceMenu);

function showPreferenceMenu(){
preference_menu.classList.toggle('inactive');
}


