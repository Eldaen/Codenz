var shopSwitch = document.body.querySelector('.shop_switch');
shopSwitch.children[0].checked = true;
shopSwitch.children[3].checked = false;

var tabOne = document.body.querySelector('.tab_1');
var tabTwo = document.body.querySelector('.tab_2');

tabTwo.classList.add('hidden');
tabOne.classList.remove ('hidden');

document.onclick = function (event){
    var target = event.target;


    if (target.getAttribute('id') == 'new_shop'){
        tabTwo.classList.add('hidden');
        tabOne.classList.remove ('hidden');
    }
    if (target.getAttribute('id') == 'old_shop'){
        tabOne.classList.add('hidden');
        tabTwo.classList.remove ('hidden');
    }
};

