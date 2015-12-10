
function PriceSwitch (options) {

    var planBlock = options.planBlock;
    var typeBlock = options.typeBlock;
    var priceObj = options.priceObj;

    var spans = planBlock.querySelectorAll('span');

    typeBlock.onclick = function (event){
        var target = event.target;

        switch (target.getAttribute('id')) {
            case 'all_hacks' : priceSwitch(priceObj.first);
                break;
            case 'small_pack': priceSwitch(priceObj.second);
                break;
            case 'single_hack': priceSwitch(priceObj.third);
                break;
            default : return;
        }
    };

    function priceSwitch (prices) {

        for (var i= 0; i < prices.length; i++){
            spans[i].innerText = prices[i] + " " + "USD"
        }
    }
}