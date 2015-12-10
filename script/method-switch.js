var methodSwitch = document.querySelector('.method_container');

methodSwitch.onclick = function (event){
    var target = event.target;
    var qiwiButton = document.querySelector('.shop_data_row input');

    if (target.getAttribute('id') == 'qiwi'){
        qiwiButton.hidden = true;
    } else {
        qiwiButton.hidden = false;
    }
};

